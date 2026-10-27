import fs from 'fs';
import path from 'path';

// Node.js FileReader polyfill for GLTFExporter
if (typeof globalThis.FileReader === 'undefined') {
  globalThis.FileReader = class FileReader {
    readAsArrayBuffer(blob) {
      blob.arrayBuffer().then((buffer) => {
        this.result = buffer;
        setTimeout(() => {
          if (this.onloadend) this.onloadend();
        }, 0);
      });
    }
  };
}

import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

// Superellipse parametric evaluation:
// x = a * sign(cos phi) * |cos phi|^(2/p)
// z = b * sign(sin phi) * |sin phi|^(2/q)
function evalSuperellipse(phi, a, b, p, q) {
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);

  const signCos = cosPhi >= 0 ? 1 : -1;
  const signSin = sinPhi >= 0 ? 1 : -1;

  const absCos = Math.abs(cosPhi);
  const absSin = Math.abs(sinPhi);

  const x = signCos * Math.pow(absCos, 2 / p) * a;
  const z = signSin * Math.pow(absSin, 2 / q) * b;

  return [x, z];
}

// Bottle dimensions profile based on exact pixel analysis of studio photos:
// Total height = 3.75 units (y from -1.60 to 2.15)
// Body width at shoulder corner = 1.82, base width = 1.66
// Body depth at shoulder = 1.02, base depth = 0.92
// Solid crystal glass base = 0.52 units thick (y from -1.60 to -1.08)
function getBottleDimensions(y) {
  let W = 1.66;
  let D = 0.92;
  let p = 3.8; // rectangular flask with distinct rounded bevel corners
  let q = 2.4; // subtle convex front and back surfaces

  if (y < -1.48) {
    // Bottom crystal chamfer / rounded bevel
    const t = (y - (-1.60)) / 0.12; // 0 to 1
    W = 1.56 + t * 0.10;
    D = 0.86 + t * 0.06;
    p = 3.4;
    q = 2.3;
  } else if (y <= 0.85) {
    // Main rectangular body with gentle upward taper/flare
    const t = (y - (-1.48)) / (0.85 - (-1.48)); // 0 to 1
    W = 1.66 + t * 0.16; // 1.66 -> 1.82
    D = 0.92 + t * 0.10; // 0.92 -> 1.02
    p = 3.8;
    q = 2.4;
  } else if (y <= 1.20) {
    // Sweeping luxury shoulders curving inward to neck
    const t = (y - 0.85) / (1.20 - 0.85); // 0 to 1
    const s = 0.5 * (1 + Math.cos(Math.PI * Math.pow(t, 0.88))); // smooth natural shoulder curve
    const neckDia = 0.50;
    W = neckDia + (1.82 - neckDia) * s;
    D = neckDia + (1.02 - neckDia) * s;
    p = 2.0 + (3.8 - 2.0) * s;
    q = 2.0 + (2.4 - 2.0) * s;
  } else {
    // Cylindrical neck with collar bead
    const neckBase = 0.50;
    // Lower glass collar bead at y ~ 1.27
    const lowerBead = 0.038 * Math.exp(-Math.pow((y - 1.27) / 0.028, 2));
    W = neckBase + lowerBead;
    D = neckBase + lowerBead;
    p = 2.0;
    q = 2.0;
  }

  return { W, D, p, q };
}

// Inner cavity profile (thick crystal glass base & authentic glass wall thickness)
function getInnerDimensions(y) {
  // Inner cavity starts at y = -1.10 (giving 0.50 units of solid crystal glass base!)
  const outer = getBottleDimensions(y);
  if (y < -1.10) {
    return { W: 0, D: 0, p: 2.0, q: 2.0 };
  }

  // Realistic heavy luxury glass wall thickness: 0.092 on sides, 0.065 front/back
  const wallX = 0.092;
  const wallZ = 0.065;
  let W = Math.max(0.1, outer.W - wallX * 2);
  let D = Math.max(0.1, outer.D - wallZ * 2);
  let p = outer.p;
  let q = outer.q;

  if (y > 1.20) {
    // Inner neck bore
    W = 0.38;
    D = 0.38;
    p = 2.0;
    q = 2.0;
  }

  return { W, D, p, q };
}

export function buildBottleScene() {
  const scene = new THREE.Scene();
  scene.name = 'Patiyala_Palace_Bottle_Scene';

  const bottleGroup = new THREE.Group();
  bottleGroup.name = 'Patiyala_Palace_Bottle';
  scene.add(bottleGroup);

  // -------------------------------------------------------------
  // 1. BOTTLE GLASS (Outer + Inner Cavity + Base Punt)
  // -------------------------------------------------------------
  const NY = 80;
  const NPHI = 64;
  const NRADIAL = 12;

  const glassPositions = [];
  const glassNormals = [];
  const glassUvs = [];
  const glassIndices = [];

  const yMin = -1.60;
  const yMax = 1.92;

  // A. Bottom Punt Base (concentric rings from center to outer perimeter)
  let vOffset = 0;
  for (let r = 0; r <= NRADIAL; r++) {
    const frac = r / NRADIAL;
    const { W, D, p, q } = getBottleDimensions(yMin);
    const a = (W / 2) * frac;
    const b = (D / 2) * frac;
    // Central punt dome curves slightly up into the bottle base
    const yPunt = yMin + 0.06 * Math.pow(1 - frac, 2);

    for (let i = 0; i <= NPHI; i++) {
      const phi = (i / NPHI) * Math.PI * 2;
      const [x, z] = evalSuperellipse(phi, a, b, p, q);
      glassPositions.push(x, yPunt, z);
      glassNormals.push(0, -1, 0);
      glassUvs.push(0.5 + 0.5 * (x / (W / 2)), 0.5 + 0.5 * (z / (D / 2)));
    }
  }

  for (let r = 0; r < NRADIAL; r++) {
    for (let i = 0; i < NPHI; i++) {
      const r1 = r * (NPHI + 1);
      const r2 = (r + 1) * (NPHI + 1);
      const a = r1 + i;
      const b = r1 + i + 1;
      const c = r2 + i;
      const d = r2 + i + 1;
      glassIndices.push(a, c, b);
      glassIndices.push(b, c, d);
    }
  }
  vOffset = (NRADIAL + 1) * (NPHI + 1);

  // B. Outer Glass Surface (from yMin to yMax)
  const outerStart = vOffset;
  for (let yIdx = 0; yIdx <= NY; yIdx++) {
    const t = yIdx / NY;
    const y = yMin + t * (yMax - yMin);
    const { W, D, p, q } = getBottleDimensions(y);
    const a = W / 2;
    const b = D / 2;

    for (let i = 0; i <= NPHI; i++) {
      const phi = (i / NPHI) * Math.PI * 2;
      const [x, z] = evalSuperellipse(phi, a, b, p, q);
      glassPositions.push(x, y, z);
      // Normalized outward normal
      const nx = x / a;
      const nz = z / b;
      const len = Math.hypot(nx, nz) || 1;
      glassNormals.push(nx / len, 0, nz / len);
      glassUvs.push(i / NPHI, t);
    }
  }

  for (let yIdx = 0; yIdx < NY; yIdx++) {
    for (let i = 0; i < NPHI; i++) {
      const row1 = outerStart + yIdx * (NPHI + 1);
      const row2 = outerStart + (yIdx + 1) * (NPHI + 1);
      const a = row1 + i;
      const b = row1 + i + 1;
      const c = row2 + i;
      const d = row2 + i + 1;
      glassIndices.push(a, c, b);
      glassIndices.push(b, c, d);
    }
  }
  vOffset += (NY + 1) * (NPHI + 1);

  // C. Top Lip Rim (connects outer neck surface at yMax to inner neck bore at yMax)
  const lipStart = vOffset;
  const outerLip = getBottleDimensions(yMax);
  const neckBoreRadius = 0.192; // inner bore of neck

  for (let i = 0; i <= NPHI; i++) {
    const phi = (i / NPHI) * Math.PI * 2;
    const [ox, oz] = evalSuperellipse(phi, outerLip.W / 2, outerLip.D / 2, 2.0, 2.0);
    const ix = neckBoreRadius * Math.cos(phi);
    const iz = neckBoreRadius * Math.sin(phi);

    glassPositions.push(ox, yMax, oz);
    glassNormals.push(0, 1, 0);
    glassUvs.push(i / NPHI, 1.0);

    glassPositions.push(ix, yMax, iz);
    glassNormals.push(0, 1, 0);
    glassUvs.push(i / NPHI, 0.95);
  }

  for (let i = 0; i < NPHI; i++) {
    const a = lipStart + i * 2;
    const b = lipStart + i * 2 + 1;
    const c = lipStart + (i + 1) * 2;
    const d = lipStart + (i + 1) * 2 + 1;
    glassIndices.push(a, b, c);
    glassIndices.push(b, d, c);
  }
  vOffset += (NPHI + 1) * 2;

  // D. Inner Neck Bore (from yMax down to yLiquidTop = 1.15 where liquid starts)
  const yLiquidTop = 1.16;
  const NY_BORE = 20;
  const boreStart = vOffset;

  for (let yIdx = 0; yIdx <= NY_BORE; yIdx++) {
    const t = yIdx / NY_BORE;
    const y = yMax - t * (yMax - yLiquidTop);

    for (let i = 0; i <= NPHI; i++) {
      const phi = (i / NPHI) * Math.PI * 2;
      const x = neckBoreRadius * Math.cos(phi);
      const z = neckBoreRadius * Math.sin(phi);

      glassPositions.push(x, y, z);
      // Inward-pointing normal for neck cavity
      glassNormals.push(-Math.cos(phi), 0, -Math.sin(phi));
      glassUvs.push(i / NPHI, 1 - t);
    }
  }

  for (let yIdx = 0; yIdx < NY_BORE; yIdx++) {
    for (let i = 0; i < NPHI; i++) {
      const row1 = boreStart + yIdx * (NPHI + 1);
      const row2 = boreStart + (yIdx + 1) * (NPHI + 1);
      const a = row1 + i;
      const b = row1 + i + 1;
      const c = row2 + i;
      const d = row2 + i + 1;
      glassIndices.push(a, b, c);
      glassIndices.push(b, d, c);
    }
  }
  vOffset += (NY_BORE + 1) * (NPHI + 1);

  // E. Base of Neck Bore at yLiquidTop (closing neck bore into liquid interface)
  const boreFloorStart = vOffset;
  for (let r = 0; r <= NRADIAL; r++) {
    const frac = 1 - r / NRADIAL;
    const rad = neckBoreRadius * frac;
    for (let i = 0; i <= NPHI; i++) {
      const phi = (i / NPHI) * Math.PI * 2;
      glassPositions.push(rad * Math.cos(phi), yLiquidTop, rad * Math.sin(phi));
      glassNormals.push(0, 1, 0);
      glassUvs.push(0.5 + 0.5 * Math.cos(phi) * frac, 0.5 + 0.5 * Math.sin(phi) * frac);
    }
  }

  for (let r = 0; r < NRADIAL; r++) {
    for (let i = 0; i < NPHI; i++) {
      const r1 = boreFloorStart + r * (NPHI + 1);
      const r2 = boreFloorStart + (r + 1) * (NPHI + 1);
      const a = r1 + i;
      const b = r1 + i + 1;
      const c = r2 + i;
      const d = r2 + i + 1;
      glassIndices.push(a, b, c);
      glassIndices.push(b, d, c);
    }
  }

  const glassGeo = new THREE.BufferGeometry();
  glassGeo.setAttribute('position', new THREE.Float32BufferAttribute(glassPositions, 3));
  glassGeo.setAttribute('normal', new THREE.Float32BufferAttribute(glassNormals, 3));
  glassGeo.setAttribute('uv', new THREE.Float32BufferAttribute(glassUvs, 2));
  glassGeo.setIndex(glassIndices);
  glassGeo.computeVertexNormals();

  const glassMat = new THREE.MeshPhysicalMaterial({
    name: 'Bottle_Glass_Material',
    color: new THREE.Color('#FFFFFF'),
    metalness: 0.0,
    roughness: 0.02,
    transmission: 0.98,
    ior: 1.52,
    thickness: 0.35,
    specularIntensity: 1.0,
    specularColor: new THREE.Color('#FFFFFF'),
    transparent: false,
    opacity: 1.0,
  });

  const glassMesh = new THREE.Mesh(glassGeo, glassMat);
  glassMesh.name = 'Bottle_Glass';
  glassMesh.castShadow = true;
  glassMesh.receiveShadow = true;
  bottleGroup.add(glassMesh);

  // -------------------------------------------------------------
  // 2. WHISKY LIQUID (Rich glowing volumetric fluid filling the bottle)
  // -------------------------------------------------------------
  // Sits from yLiquidBottom = -1.28 (top of crystal glass base) to yLiquidTop = 1.16
  const liquidPositions = [];
  const liquidNormals = [];
  const liquidUvs = [];
  const liquidIndices = [];

  const yLiquidBottom = -1.28;
  const NY_LIQ = 60;

  // Function to get authentic liquid dimensions with natural wall clearances
  function getLiquidDimensions(y) {
    const outer = getBottleDimensions(y);
    // 0.055 side wall clearance, 0.038 front/back clearance
    const wallX = 0.055;
    const wallZ = 0.038;
    const W = Math.max(0.1, outer.W - wallX * 2);
    const D = Math.max(0.1, outer.D - wallZ * 2);
    return { W, D, p: outer.p, q: outer.q };
  }

  // Liquid body surface
  for (let yIdx = 0; yIdx <= NY_LIQ; yIdx++) {
    const t = yIdx / NY_LIQ;
    const y = yLiquidBottom + t * (yLiquidTop - yLiquidBottom);
    const { W, D, p, q } = getLiquidDimensions(y);
    const a = W / 2;
    const b = D / 2;

    for (let i = 0; i <= NPHI; i++) {
      const phi = (i / NPHI) * Math.PI * 2;
      const [x, z] = evalSuperellipse(phi, a, b, p, q);
      liquidPositions.push(x, y, z);
      const nx = x / a;
      const nz = z / b;
      const len = Math.hypot(nx, nz) || 1;
      liquidNormals.push(nx / len, 0, nz / len);
      liquidUvs.push(i / NPHI, t);
    }
  }

  for (let yIdx = 0; yIdx < NY_LIQ; yIdx++) {
    for (let i = 0; i < NPHI; i++) {
      const r1 = yIdx * (NPHI + 1);
      const r2 = (yIdx + 1) * (NPHI + 1);
      const a = r1 + i;
      const b = r1 + i + 1;
      const c = r2 + i;
      const d = r2 + i + 1;
      liquidIndices.push(a, c, b);
      liquidIndices.push(b, c, d);
    }
  }

  // Liquid top meniscus cap (at yLiquidTop)
  const topStart = (NY_LIQ + 1) * (NPHI + 1);
  const { W: lw, D: ld, p: lp, q: lq } = getLiquidDimensions(yLiquidTop);
  const la = lw / 2;
  const lb = ld / 2;

  for (let r = 0; r <= NRADIAL; r++) {
    const frac = r / NRADIAL;
    const a = la * frac;
    const b = lb * frac;
    // Slight meniscus curve (concave towards center)
    const ym = yLiquidTop - 0.012 * Math.pow(1 - frac, 2);
    for (let i = 0; i <= NPHI; i++) {
      const phi = (i / NPHI) * Math.PI * 2;
      const [x, z] = evalSuperellipse(phi, a, b, lp, lq);
      liquidPositions.push(x, ym, z);
      liquidNormals.push(0, 1, 0);
      liquidUvs.push(0.5 + 0.5 * (x / la), 0.5 + 0.5 * (z / lb));
    }
  }

  for (let r = 0; r < NRADIAL; r++) {
    for (let i = 0; i < NPHI; i++) {
      const r1 = topStart + r * (NPHI + 1);
      const r2 = topStart + (r + 1) * (NPHI + 1);
      const a = r1 + i;
      const b = r1 + i + 1;
      const c = r2 + i;
      const d = r2 + i + 1;
      liquidIndices.push(a, c, b);
      liquidIndices.push(b, c, d);
    }
  }

  // Liquid bottom base cap (at yLiquidBottom = -1.28) - SEALS FLUID ONTO CRYSTAL BASE
  const bottomStart = liquidPositions.length / 3;
  const { W: bw, D: bd, p: bp, q: bq } = getLiquidDimensions(yLiquidBottom);
  const ba = bw / 2;
  const bb = bd / 2;

  for (let r = 0; r <= NRADIAL; r++) {
    const frac = r / NRADIAL;
    const a = ba * frac;
    const b = bb * frac;
    for (let i = 0; i <= NPHI; i++) {
      const phi = (i / NPHI) * Math.PI * 2;
      const [x, z] = evalSuperellipse(phi, a, b, bp, bq);
      liquidPositions.push(x, yLiquidBottom, z);
      liquidNormals.push(0, -1, 0);
      liquidUvs.push(0.5 + 0.5 * (x / ba), 0.5 + 0.5 * (z / bb));
    }
  }

  for (let r = 0; r < NRADIAL; r++) {
    for (let i = 0; i < NPHI; i++) {
      const r1 = bottomStart + r * (NPHI + 1);
      const r2 = bottomStart + (r + 1) * (NPHI + 1);
      const a = r1 + i;
      const b = r1 + i + 1;
      const c = r2 + i;
      const d = r2 + i + 1;
      // Facing DOWN (-Y)
      liquidIndices.push(a, b, c);
      liquidIndices.push(b, d, c);
    }
  }

  const liquidGeo = new THREE.BufferGeometry();
  liquidGeo.setAttribute('position', new THREE.Float32BufferAttribute(liquidPositions, 3));
  liquidGeo.setAttribute('normal', new THREE.Float32BufferAttribute(liquidNormals, 3));
  liquidGeo.setAttribute('uv', new THREE.Float32BufferAttribute(liquidUvs, 2));
  liquidGeo.setIndex(liquidIndices);
  liquidGeo.computeVertexNormals();

  const liquidMat = new THREE.MeshStandardMaterial({
    name: 'Whisky_Liquid_Material',
    color: new THREE.Color('#E07408'), // rich glowing warm amber
    emissive: new THREE.Color('#782400'), // warm caramel inner glow
    emissiveIntensity: 0.28,
    roughness: 0.04,
    metalness: 0.0,
    side: THREE.DoubleSide,
  });

  const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
  liquidMesh.name = 'Whisky_Liquid';
  bottleGroup.add(liquidMesh);

  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // 3. FRONT LABEL (Conformal curved paper on front glass)
  // -------------------------------------------------------------
  // Y range: -1.22 to 0.96 (height 2.18, exactly matching studio photo)
  // X range: -0.62 to 0.62
  const NX = 32;
  const NY_LABEL = 36;
  const yLabelMin = -1.22;
  const yLabelMax = 0.96;
  const xLabelHalf = 0.62;

  const fLabelPos = [];
  const fLabelNorm = [];
  const fLabelUvs = [];
  const fLabelIndices = [];

  for (let yi = 0; yi <= NY_LABEL; yi++) {
    const ty = yi / NY_LABEL;
    const y = yLabelMin + ty * (yLabelMax - yLabelMin);
    const { W, D, p, q } = getBottleDimensions(y);
    const a = W / 2;
    const b = D / 2;

    for (let xi = 0; xi <= NX; xi++) {
      const tx = xi / NX;
      const x = -xLabelHalf + tx * (2 * xLabelHalf);

      const xNorm = Math.min(0.995, Math.abs(x / a));
      const zNorm = Math.pow(Math.max(0.001, 1 - Math.pow(xNorm, p)), 1 / q);
      const z = zNorm * b + 0.0012; // sits flush on outer glass surface

      fLabelPos.push(x, y, z);
      fLabelNorm.push(0, 0, 1);
      fLabelUvs.push(tx, ty);
    }
  }

  for (let yi = 0; yi < NY_LABEL; yi++) {
    for (let xi = 0; xi < NX; xi++) {
      const r1 = yi * (NX + 1);
      const r2 = (yi + 1) * (NX + 1);
      const a = r1 + xi;
      const b = r1 + xi + 1;
      const c = r2 + xi;
      const d = r2 + xi + 1;
      fLabelIndices.push(a, b, c);
      fLabelIndices.push(b, d, c);
    }
  }

  const fLabelGeo = new THREE.BufferGeometry();
  fLabelGeo.setAttribute('position', new THREE.Float32BufferAttribute(fLabelPos, 3));
  fLabelGeo.setAttribute('normal', new THREE.Float32BufferAttribute(fLabelNorm, 3));
  fLabelGeo.setAttribute('uv', new THREE.Float32BufferAttribute(fLabelUvs, 2));
  fLabelGeo.setIndex(fLabelIndices);
  fLabelGeo.computeVertexNormals();

  const fLabelMat = new THREE.MeshStandardMaterial({
    name: 'Front_Label_Material',
    color: new THREE.Color('#FFFFFF'),
    roughness: 0.42,
    metalness: 0.08,
    transparent: true,
  });

  const fLabelMesh = new THREE.Mesh(fLabelGeo, fLabelMat);
  fLabelMesh.name = 'Front_Label';
  bottleGroup.add(fLabelMesh);

  // Front Label Backing (cream cotton paper facing inward -Z towards the liquid)
  const fBackingIndices = [];
  for (let yi = 0; yi < NY_LABEL; yi++) {
    for (let xi = 0; xi < NX; xi++) {
      const r1 = yi * (NX + 1);
      const r2 = (yi + 1) * (NX + 1);
      const a = r1 + xi;
      const b = r1 + xi + 1;
      const c = r2 + xi;
      const d = r2 + xi + 1;
      // Reversed winding to point inward (-Z)
      fBackingIndices.push(a, c, b);
      fBackingIndices.push(b, c, d);
    }
  }
  const fBackingGeo = new THREE.BufferGeometry();
  const fBackingPos = [];
  for (let idx = 0; idx < fLabelPos.length; idx += 3) {
    fBackingPos.push(fLabelPos[idx], fLabelPos[idx + 1], fLabelPos[idx + 2] - 0.0004);
  }
  fBackingGeo.setAttribute('position', new THREE.Float32BufferAttribute(fBackingPos, 3));
  fBackingGeo.setAttribute('uv', new THREE.Float32BufferAttribute(fLabelUvs, 2));
  fBackingGeo.setIndex(fBackingIndices);
  fBackingGeo.computeVertexNormals();

  const fBackingMat = new THREE.MeshStandardMaterial({
    name: 'Front_Label_Backing_Material',
    color: new THREE.Color('#EDE6D6'), // luxury cream cotton paper
    roughness: 0.90,
    metalness: 0.0,
  });
  const fBackingMesh = new THREE.Mesh(fBackingGeo, fBackingMat);
  fBackingMesh.name = 'Front_Label_Backing';
  bottleGroup.add(fBackingMesh);

  // -------------------------------------------------------------
  // 4. BACK LABEL (Conformal curved paper on rear glass)
  // -------------------------------------------------------------
  const bLabelPos = [];
  const bLabelNorm = [];
  const bLabelUvs = [];
  const bLabelIndices = [];

  const yBLabelMin = -1.24;
  const yBLabelMax = 0.96;
  const xBLabelHalf = 0.64;

  for (let yi = 0; yi <= NY_LABEL; yi++) {
    const ty = yi / NY_LABEL;
    const y = yBLabelMin + ty * (yBLabelMax - yBLabelMin);
    const { W, D, p, q } = getBottleDimensions(y);
    const a = W / 2;
    const b = D / 2;

    for (let xi = 0; xi <= NX; xi++) {
      const tx = xi / NX;
      // Flip X so viewing from rear reads left-to-right naturally
      const x = xBLabelHalf - tx * (2 * xBLabelHalf);

      const xNorm = Math.min(0.995, Math.abs(x / a));
      const zNorm = Math.pow(Math.max(0.001, 1 - Math.pow(xNorm, p)), 1 / q);
      const z = -(zNorm * b + 0.0012); // sits flush on rear glass

      bLabelPos.push(x, y, z);
      bLabelNorm.push(0, 0, -1);
      bLabelUvs.push(tx, ty);
    }
  }

  for (let yi = 0; yi < NY_LABEL; yi++) {
    for (let xi = 0; xi < NX; xi++) {
      const r1 = yi * (NX + 1);
      const r2 = (yi + 1) * (NX + 1);
      const a = r1 + xi;
      const b = r1 + xi + 1;
      const c = r2 + xi;
      const d = r2 + xi + 1;
      bLabelIndices.push(a, b, c);
      bLabelIndices.push(b, d, c);
    }
  }

  const bLabelGeo = new THREE.BufferGeometry();
  bLabelGeo.setAttribute('position', new THREE.Float32BufferAttribute(bLabelPos, 3));
  bLabelGeo.setAttribute('normal', new THREE.Float32BufferAttribute(bLabelNorm, 3));
  bLabelGeo.setAttribute('uv', new THREE.Float32BufferAttribute(bLabelUvs, 2));
  bLabelGeo.setIndex(bLabelIndices);
  bLabelGeo.computeVertexNormals();

  const bLabelMat = new THREE.MeshStandardMaterial({
    name: 'Back_Label_Material',
    color: new THREE.Color('#FFFFFF'),
    roughness: 0.42,
    metalness: 0.08,
    transparent: true,
  });

  const bLabelMesh = new THREE.Mesh(bLabelGeo, bLabelMat);
  bLabelMesh.name = 'Back_Label';
  bottleGroup.add(bLabelMesh);

  // Back Label Backing (cream cotton paper facing inward +Z towards the liquid)
  const bBackingIndices = [];
  for (let yi = 0; yi < NY_LABEL; yi++) {
    for (let xi = 0; xi < NX; xi++) {
      const r1 = yi * (NX + 1);
      const r2 = (yi + 1) * (NX + 1);
      const a = r1 + xi;
      const b = r1 + xi + 1;
      const c = r2 + xi;
      const d = r2 + xi + 1;
      // Reversed winding to point inward (+Z)
      bBackingIndices.push(a, c, b);
      bBackingIndices.push(b, c, d);
    }
  }
  const bBackingGeo = new THREE.BufferGeometry();
  const bBackingPos = [];
  for (let idx = 0; idx < bLabelPos.length; idx += 3) {
    bBackingPos.push(bLabelPos[idx], bLabelPos[idx + 1], bLabelPos[idx + 2] + 0.0004);
  }
  bBackingGeo.setAttribute('position', new THREE.Float32BufferAttribute(bBackingPos, 3));
  bBackingGeo.setAttribute('uv', new THREE.Float32BufferAttribute(bLabelUvs, 2));
  bBackingGeo.setIndex(bBackingIndices);
  bBackingGeo.computeVertexNormals();

  const bBackingMat = new THREE.MeshStandardMaterial({
    name: 'Back_Label_Backing_Material',
    color: new THREE.Color('#EDE6D6'), // luxury cream cotton paper
    roughness: 0.90,
    metalness: 0.0,
  });
  const bBackingMesh = new THREE.Mesh(bBackingGeo, bBackingMat);
  bBackingMesh.name = 'Back_Label_Backing';
  bottleGroup.add(bBackingMesh);

  // -------------------------------------------------------------
  // 5. NECK LABEL (Foil/paper band wrapping cylindrical neck)
  // -------------------------------------------------------------
  // Neck cylinder radius ~ 0.256, from y = 1.33 to y = 1.71 (height 0.38)
  const neckLabelGeo = new THREE.CylinderGeometry(0.256, 0.256, 0.38, 48, 1, true);
  neckLabelGeo.rotateY(Math.PI); // Orient front royal seal facing +Z
  neckLabelGeo.translate(0, 1.52, 0);

  const neckLabelMat = new THREE.MeshStandardMaterial({
    name: 'Neck_Label_Material',
    color: new THREE.Color('#FFFFFF'),
    roughness: 0.32,
    metalness: 0.12,
  });

  const neckLabelMesh = new THREE.Mesh(neckLabelGeo, neckLabelMat);
  neckLabelMesh.name = 'Neck_Label';
  bottleGroup.add(neckLabelMesh);

  // -------------------------------------------------------------
  // 6. CORK STOPPER (Visible through clear glass neck)
  // -------------------------------------------------------------
  const corkGeo = new THREE.CylinderGeometry(0.192, 0.192, 0.40, 32);
  corkGeo.translate(0, 1.86, 0);

  const corkMat = new THREE.MeshStandardMaterial({
    name: 'Cork_Stopper_Material',
    color: new THREE.Color('#D8B084'), // natural cork tan
    roughness: 0.85,
    metalness: 0.0,
  });

  const corkMesh = new THREE.Mesh(corkGeo, corkMat);
  corkMesh.name = 'Cork_Stopper';
  bottleGroup.add(corkMesh);

  // -------------------------------------------------------------
  // 7. BOTTLE CAP (Dark navy blue cap with polished silver rim & top bevel)
  // -------------------------------------------------------------
  // Cap sits from y = 1.92 to y = 2.14
  const capRadius = 0.264;

  // Bottom chrome/silver ring accent
  const capSilverGeo = new THREE.CylinderGeometry(capRadius * 1.01, capRadius * 1.01, 0.032, 48);
  capSilverGeo.translate(0, 1.936, 0);
  const capSilverMat = new THREE.MeshStandardMaterial({
    name: 'Cap_Silver_Rim_Material',
    color: new THREE.Color('#E6EEF8'),
    metalness: 0.95,
    roughness: 0.10,
  });
  const capSilverMesh = new THREE.Mesh(capSilverGeo, capSilverMat);
  capSilverMesh.name = 'Cap_Silver_Rim';
  bottleGroup.add(capSilverMesh);

  // Main navy cap body
  const capGeo = new THREE.CylinderGeometry(capRadius, capRadius, 0.18, 48);
  capGeo.translate(0, 2.04, 0);

  // Top beveled disk on cap
  const topDiskGeo = new THREE.CylinderGeometry(capRadius * 0.94, capRadius, 0.025, 48);
  topDiskGeo.translate(0, 2.138, 0);

  const capMat = new THREE.MeshStandardMaterial({
    name: 'Bottle_Cap_Material',
    color: new THREE.Color('#0A1C44'), // deep royal navy
    roughness: 0.28,
    metalness: 0.18,
  });

  const capMesh = new THREE.Mesh(capGeo, capMat);
  capMesh.name = 'Bottle_Cap';
  const topDiskMesh = new THREE.Mesh(topDiskGeo, capMat);
  topDiskMesh.name = 'Bottle_Cap_Top';
  bottleGroup.add(capMesh);
  bottleGroup.add(topDiskMesh);

  // Crown Medallion on top of cap
  const crownGeo = new THREE.CircleGeometry(capRadius * 0.90, 48);
  crownGeo.rotateX(-Math.PI / 2);
  crownGeo.translate(0, 2.152, 0);
  const crownMat = new THREE.MeshStandardMaterial({
    name: 'Cap_Crown_Material',
    color: new THREE.Color('#FFFFFF'),
    roughness: 0.24,
    metalness: 0.75,
  });
  const crownMesh = new THREE.Mesh(crownGeo, crownMat);
  crownMesh.name = 'Cap_Crown';
  bottleGroup.add(crownMesh);


  return scene;
}

// Export to GLB file
const scene = buildBottleScene();
const exporter = new GLTFExporter();

exporter.parse(
  scene,
  (gltf) => {
    const outPath = path.resolve('public/models/patiyala-palace-bottle.glb');
    fs.writeFileSync(outPath, Buffer.from(gltf));
    console.log(`Successfully exported production GLB to ${outPath} (${gltf.byteLength} bytes)`);

    // Also export a text gltf in 3d-source for inspection
    const sourcePath = path.resolve('3d-source/patiyala-palace-bottle.gltf');
    fs.writeFileSync(sourcePath, JSON.stringify(gltf, null, 2));
    console.log(`Saved source GLTF to ${sourcePath}`);
  },
  (error) => {
    console.error('Error exporting GLTF:', error);
    process.exit(1);
  },
  { binary: true }
);
