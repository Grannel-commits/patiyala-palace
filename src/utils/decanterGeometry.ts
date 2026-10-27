import * as THREE from 'three';

// Superellipse parametric evaluation
function evalSuperellipse(
  phi: number,
  a: number,
  b: number,
  p: number,
  q: number
): [number, number, number, number] {
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);

  const signCos = cosPhi >= 0 ? 1 : -1;
  const signSin = sinPhi >= 0 ? 1 : -1;

  const absCos = Math.abs(cosPhi);
  const absSin = Math.abs(sinPhi);

  const x = signCos * Math.pow(absCos, 2 / p) * a;
  const z = signSin * Math.pow(absSin, 2 / q) * b;

  // Approximate 2D outward normal
  const nx = signCos * Math.pow(absCos, 2 - 2 / p) / a;
  const nz = signSin * Math.pow(absSin, 2 - 2 / q) / b;
  const len = Math.hypot(nx, nz) || 1;

  return [x, z, nx / len, nz / len];
}

// Bottle profile at height y
function getBottleDimensions(y: number) {
  // y ranges from -1.56 (base) to 2.65 (neck rim)
  let W = 2.22;
  let D = 1.22;
  let p = 3.2; // crisp rectangular flask with rounded bevel corners
  let q = 2.4; // convex front/back curvature

  if (y < -1.44) {
    // Base bottom chamfer rounding
    const t = Math.max(0, Math.min(1, (y - (-1.56)) / 0.12));
    W = 2.14 + t * 0.08;
    D = 1.16 + t * 0.06;
    p = 3.2;
    q = 2.4;
  } else if (y <= 0.96) {
    // Main decanter flask body (subtle regal taper towards shoulder)
    const t = (y - (-1.44)) / (0.96 - (-1.44));
    W = 2.22 + t * 0.10; // 2.22 -> 2.32
    D = 1.22 + t * 0.04; // 1.22 -> 1.26
    p = 3.2;
    q = 2.4;
  } else if (y <= 1.54) {
    // Sweeping luxury shoulders
    const t = (y - 0.96) / 0.58;
    const s = 0.5 * (1 + Math.cos(Math.PI * t)); // smooth cosine shoulder curve
    const neckDia = 0.70;
    W = neckDia + (2.32 - neckDia) * s;
    D = neckDia + (1.26 - neckDia) * s;
    p = 2.0 + (3.2 - 2.0) * s;
    q = 2.0 + (2.4 - 2.0) * s;
  } else {
    // Cylindrical neck with base collar and bead ring
    const baseDia = 0.68;
    // Lower glass collar ring at y ~ 1.56
    const collar = 0.045 * Math.exp(-Math.pow((y - 1.56) / 0.035, 2));
    // Upper glass bead ring at y ~ 2.48
    const bead = 0.045 * Math.exp(-Math.pow((y - 2.48) / 0.035, 2));
    W = baseDia + collar + bead;
    D = baseDia + collar + bead;
    p = 2.0;
    q = 2.0;
  }

  return { W, D, p, q };
}

export function createDecanterGlassGeometry(): THREE.BufferGeometry {
  const geom = new THREE.BufferGeometry();
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  const NY = 64; // height rings
  const NPHI = 64; // radial points per ring

  const yMin = -1.56;
  const yMax = 2.65;

  // 1. Bottom Punt / Kickup Rings (concentric circles closing the bottom)
  const NRADIAL = 10;
  for (let rIdx = 0; rIdx <= NRADIAL; rIdx++) {
    const rFrac = rIdx / NRADIAL; // 0 (center) to 1 (outer base perimeter)
    const { W, D, p, q } = getBottleDimensions(yMin);
    const a = (W / 2) * rFrac;
    const b = (D / 2) * rFrac;
    // Subtle luxury kickup dome: curves upward in center
    const yPunt = yMin + 0.08 * Math.pow(1 - rFrac, 1.8);

    for (let pIdx = 0; pIdx <= NPHI; pIdx++) {
      const phi = (pIdx / NPHI) * Math.PI * 2;
      const [x, z] = evalSuperellipse(phi, a, b, p, q);
      positions.push(x, yPunt, z);
      // Normal points inward/upward to catch internal caustics and overhead softbox light
      normals.push(0, 0.85, 0.15);
      uvs.push(0.5 + 0.5 * (x / (W / 2)), 0.5 + 0.5 * (z / (D / 2)));
    }
  }

  // Bottom punt indices
  for (let rIdx = 0; rIdx < NRADIAL; rIdx++) {
    for (let pIdx = 0; pIdx < NPHI; pIdx++) {
      const row1 = rIdx * (NPHI + 1);
      const row2 = (rIdx + 1) * (NPHI + 1);
      const a = row1 + pIdx;
      const b = row1 + pIdx + 1;
      const c = row2 + pIdx;
      const d = row2 + pIdx + 1;
      indices.push(a, c, b);
      indices.push(b, c, d);
    }
  }

  // 2. Outer Sidewall Mesh from yMin to yMax
  const sideVertexOffset = positions.length / 3;

  for (let yIdx = 0; yIdx <= NY; yIdx++) {
    const v = yIdx / NY;
    const y = yMin + v * (yMax - yMin);
    const { W, D, p, q } = getBottleDimensions(y);
    const a = W / 2;
    const b = D / 2;

    for (let pIdx = 0; pIdx <= NPHI; pIdx++) {
      const phi = (pIdx / NPHI) * Math.PI * 2;
      const [x, z, nx, nz] = evalSuperellipse(phi, a, b, p, q);
      positions.push(x, y, z);
      normals.push(nx, 0, nz);
      uvs.push(pIdx / NPHI, v);
    }
  }

  // Sidewall indices
  for (let yIdx = 0; yIdx < NY; yIdx++) {
    for (let pIdx = 0; pIdx < NPHI; pIdx++) {
      const row1 = sideVertexOffset + yIdx * (NPHI + 1);
      const row2 = sideVertexOffset + (yIdx + 1) * (NPHI + 1);
      const a = row1 + pIdx;
      const b = row1 + pIdx + 1;
      const c = row2 + pIdx;
      const d = row2 + pIdx + 1;
      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geom.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);
  geom.computeVertexNormals();

  return geom;
}

export function createDecanterLiquidGeometry(): THREE.BufferGeometry {
  const geom = new THREE.BufferGeometry();
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  const NY = 48;
  const NPHI = 48;

  // Liquid fills right to the bottom crystal punt (y = -1.55) so golden malt illumination fills the base
  const yLiquidMin = -1.55;
  const yLiquidMax = 1.95; // fill line in neck
  const wallThickness = 0.052;

  // 1. Bottom floor of the liquid cavity (rich warm oak amber base)
  const NRADIAL = 8;
  for (let rIdx = 0; rIdx <= NRADIAL; rIdx++) {
    const rFrac = rIdx / NRADIAL;
    const { W, D, p, q } = getBottleDimensions(yLiquidMin);
    const a = Math.max(0.01, (W / 2 - wallThickness) * rFrac);
    const b = Math.max(0.01, (D / 2 - wallThickness) * rFrac);
    const yFloor = yLiquidMin + 0.025 * (1 - rFrac);

    for (let pIdx = 0; pIdx <= NPHI; pIdx++) {
      const phi = (pIdx / NPHI) * Math.PI * 2;
      const [x, z] = evalSuperellipse(phi, a, b, p, q);
      positions.push(x, yFloor, z);
      normals.push(0, 0.8, 0.2); // Catches ambient warm reflection
      uvs.push(pIdx / NPHI, 0.96); // Map to warm oak amber border
    }
  }

  for (let rIdx = 0; rIdx < NRADIAL; rIdx++) {
    for (let pIdx = 0; pIdx < NPHI; pIdx++) {
      const row1 = rIdx * (NPHI + 1);
      const row2 = (rIdx + 1) * (NPHI + 1);
      const a = row1 + pIdx;
      const b = row1 + pIdx + 1;
      const c = row2 + pIdx;
      const d = row2 + pIdx + 1;
      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  // 2. Liquid Sidewalls
  const sideVertexOffset = positions.length / 3;
  for (let yIdx = 0; yIdx <= NY; yIdx++) {
    const v = yIdx / NY;
    const y = yLiquidMin + v * (yLiquidMax - yLiquidMin);
    const { W, D, p, q } = getBottleDimensions(y);
    const a = Math.max(0.26, W / 2 - wallThickness);
    const b = Math.max(0.26, D / 2 - wallThickness);

    for (let pIdx = 0; pIdx <= NPHI; pIdx++) {
      const phi = (pIdx / NPHI) * Math.PI * 2;
      const [x, z, nx, nz] = evalSuperellipse(phi, a, b, p, q);
      positions.push(x, y, z);
      normals.push(nx, 0, nz);
      // Texture v: 1 at bottom (v=0 in geometry), 0 at top (v=1 in geometry)
      uvs.push(pIdx / NPHI, 1 - v);
    }
  }

  for (let yIdx = 0; yIdx < NY; yIdx++) {
    for (let pIdx = 0; pIdx < NPHI; pIdx++) {
      const row1 = sideVertexOffset + yIdx * (NPHI + 1);
      const row2 = sideVertexOffset + (yIdx + 1) * (NPHI + 1);
      const a = row1 + pIdx;
      const b = row1 + pIdx + 1;
      const c = row2 + pIdx;
      const d = row2 + pIdx + 1;
      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  // 3. Top Meniscus
  const meniscusOffset = positions.length / 3;
  const { W: wTop, D: dTop } = getBottleDimensions(yLiquidMax);
  const aTop = Math.max(0.26, wTop / 2 - wallThickness);
  const bTop = Math.max(0.26, dTop / 2 - wallThickness);

  for (let rIdx = 0; rIdx <= NRADIAL; rIdx++) {
    const rFrac = rIdx / NRADIAL;
    const a = aTop * rFrac;
    const b = bTop * rFrac;
    const yMeniscus = yLiquidMax - 0.02 * (1 - rFrac);

    for (let pIdx = 0; pIdx <= NPHI; pIdx++) {
      const phi = (pIdx / NPHI) * Math.PI * 2;
      const [x, z] = evalSuperellipse(phi, a, b, 2.0, 2.0);
      positions.push(x, yMeniscus, z);
      normals.push(0, 1, 0);
      uvs.push(pIdx / NPHI, 0.04); // Top meniscus darkening
    }
  }

  for (let rIdx = 0; rIdx < NRADIAL; rIdx++) {
    for (let pIdx = 0; pIdx < NPHI; pIdx++) {
      const row1 = meniscusOffset + rIdx * (NPHI + 1);
      const row2 = meniscusOffset + (rIdx + 1) * (NPHI + 1);
      const a = row1 + pIdx;
      const b = row1 + pIdx + 1;
      const c = row2 + pIdx;
      const d = row2 + pIdx + 1;
      indices.push(a, c, b);
      indices.push(b, c, d);
    }
  }

  geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geom.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);
  geom.computeVertexNormals();

  return geom;
}

// Surface-conforming curved front/back label with linear horizontal spacing (zero distortion)
export function createCurvedLabelGeometry(
  isFront: boolean
): THREE.BufferGeometry {
  const geom = new THREE.BufferGeometry();
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  const NX = 32;
  const NY = 42;

  // Label vertical span matching real photo (from just above liquid floor to shoulder transition)
  const yBottom = -1.28;
  const yTop = 0.92;

  for (let yIdx = 0; yIdx <= NY; yIdx++) {
    const v = yIdx / NY;
    const y = yBottom + v * (yTop - yBottom);
    const { W, D, p, q } = getBottleDimensions(y);
    const a = W / 2;
    const b = D / 2;

    // Label width is ~68% of bottle face width at height y
    const labelW = W * 0.68;

    for (let xIdx = 0; xIdx <= NX; xIdx++) {
      const u = xIdx / NX;
      // Linear Euclidean x mapping eliminates center stretching of superellipse coordinates!
      // Front: u=0 (left) -> x < 0, u=1 (right) -> x > 0
      // Back: when bottle rotates 180 deg around Y, viewer's left is +x, so u=0 -> x > 0, u=1 -> x < 0
      const x = isFront
        ? (u - 0.5) * labelW
        : (0.5 - u) * labelW;

      // Exact superellipse surface equation: |x/a|^p + |z/b|^q = 1
      const xFrac = Math.min(0.999, Math.abs(x) / a);
      const zTerm = Math.max(0.0001, 1.0 - Math.pow(xFrac, p));
      const zMag = b * Math.pow(zTerm, 1.0 / q);
      const z = isFront ? zMag : -zMag;

      // Exact 2D outward surface normal
      const signX = x >= 0 ? 1 : -1;
      const signZ = isFront ? 1 : -1;
      const nxRaw = (p / a) * Math.pow(xFrac, p - 1) * signX;
      const nzRaw = (q / b) * Math.pow(zMag / b, q - 1) * signZ;
      const nLen = Math.hypot(nxRaw, nzRaw) || 1;
      const nx = nxRaw / nLen;
      const nz = nzRaw / nLen;

      // Offset outward from glass by 0.005 to sit cleanly on surface without z-fighting
      const offset = 0.005;
      positions.push(x + nx * offset, y, z + nz * offset);
      normals.push(nx, 0, nz);
      uvs.push(u, v);
    }
  }

  for (let yIdx = 0; yIdx < NY; yIdx++) {
    for (let xIdx = 0; xIdx < NX; xIdx++) {
      const row1 = yIdx * (NX + 1);
      const row2 = (yIdx + 1) * (NX + 1);
      const a = row1 + xIdx;
      const b = row1 + xIdx + 1;
      const c = row2 + xIdx;
      const d = row2 + xIdx + 1;

      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geom.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);
  geom.computeVertexNormals();

  return geom;
}
