import React, { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  Float,
  useTexture,
  useGLTF,
  Sparkles,
  OrbitControls,
  Environment,
  Lightformer,
} from '@react-three/drei';
import * as THREE from 'three';

interface Props {
  scrollProgress?: number;
  autoRotate?: boolean;
  targetView?: 'front' | 'back' | 'angle' | null;
  enableOrbit?: boolean;
  scale?: number;
  positionY?: number;
  onUserInteracting?: (isInteracting: boolean) => void;
}

export const Bottle3D: React.FC<Props> = ({
  scrollProgress = 0,
  autoRotate = false,
  targetView = null,
  enableOrbit = true,
  scale = 1,
  positionY = 0,
  onUserInteracting,
}) => {
  const bottleGroup = useRef<THREE.Group>(null);
  const rotatorGroup = useRef<THREE.Group>(null);
  const controlsRef = useRef<any>(null);

  const [isDragging, setIsDragging] = useState(false);

  // 1. Load the production-grade GLB model created from exact reference photos (cache-busted)
  const { scene } = useGLTF('/models/patiyala-palace-bottle.glb?v=5');

  // 2. Load High-Res Authentic Labels and Textures
  const [
    frontLabelDiffuse,
    frontLabelRoughness,
    frontLabelNormal,
    backLabelDiffuse,
    backLabelRoughness,
    neckLabelDiffuse,
    corkDiffuse,
    capCrownDiffuse,
    whiskyDiffuse,
  ] = useTexture([
    '/models/textures/front-label/front_label_diffuse.png',
    '/models/textures/front-label/front_label_roughness.png',
    '/models/textures/front-label/front_label_normal.png',
    '/models/textures/back-label/back_label_diffuse.png',
    '/models/textures/back-label/back_label_roughness.png',
    '/models/textures/neck-label/neck_label_diffuse.png',
    '/models/textures/cork/cork_diffuse.png',
    '/models/textures/cap/cap_top.png',
    '/models/textures/whisky/whisky_liquid.png',
  ]);

  // 3. Texture Filtering & ColorSpace Optimization
  useMemo(() => {
    [
      frontLabelDiffuse,
      backLabelDiffuse,
      neckLabelDiffuse,
      corkDiffuse,
      capCrownDiffuse,
      whiskyDiffuse,
    ].forEach((tex) => {
      if (tex) {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.generateMipmaps = true;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.anisotropy = 16;
      }
    });

    [frontLabelRoughness, frontLabelNormal, backLabelRoughness].forEach((tex) => {
      if (tex) {
        tex.colorSpace = THREE.NoColorSpace;
        tex.generateMipmaps = true;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.anisotropy = 16;
      }
    });

    if (whiskyDiffuse) {
      whiskyDiffuse.wrapS = THREE.RepeatWrapping;
      whiskyDiffuse.wrapT = THREE.ClampToEdgeWrapping;
    }
    if (neckLabelDiffuse) {
      neckLabelDiffuse.wrapS = THREE.RepeatWrapping;
      neckLabelDiffuse.wrapT = THREE.ClampToEdgeWrapping;
    }
  }, [
    frontLabelDiffuse,
    frontLabelRoughness,
    frontLabelNormal,
    backLabelDiffuse,
    backLabelRoughness,
    neckLabelDiffuse,
    corkDiffuse,
    capCrownDiffuse,
    whiskyDiffuse,
  ]);

  // 4. Configure Physically-Accurate Luxury Materials on Cloned GLB Model
  const model = useMemo(() => {
    const cloned = scene.clone(true);

    // Flawless optical flint crystal glass with physical transmission and refraction
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      name: 'Luxury_Flint_Glass',
      color: new THREE.Color('#FFFFFF'),
      transmission: 1.0,
      ior: 1.52,
      thickness: 0.35,
      roughness: 0.01,
      metalness: 0.0,
      specularIntensity: 1.0,
      specularColor: new THREE.Color('#FFFFFF'),
      envMapIntensity: 1.5,
      side: THREE.FrontSide,
      transparent: false,
    });

    // Glowing Indian craft single malt whisky volume with authentic fluid depth and translucent warmth
    const liquidMaterial = new THREE.MeshStandardMaterial({
      name: 'Aged_Malt_Whisky_Fluid',
      color: new THREE.Color('#DF7208'), // rich deep amber malt whisky
      emissive: new THREE.Color('#782200'), // warm caramel inner glow
      emissiveIntensity: 0.30,
      roughness: 0.04,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });

    // Label backing material: luxury cream cotton paper on the inside face
    const labelBackingMaterial = new THREE.MeshStandardMaterial({
      name: 'Royal_Label_Backing',
      color: new THREE.Color('#EDE4D4'),
      roughness: 0.90,
      metalness: 0.0,
      transparent: false,
      alphaTest: 0.5,
      side: THREE.FrontSide,
    });

    // Front royal shield label: matte cotton paper background with embossed silver foil typography
    const frontLabelMaterial = new THREE.MeshStandardMaterial({
      name: 'Royal_Front_Label',
      map: frontLabelDiffuse,
      roughnessMap: frontLabelRoughness,
      normalMap: frontLabelNormal,
      normalScale: new THREE.Vector2(0.25, 0.25),
      transparent: false,
      alphaTest: 0.5,
      roughness: 0.88,
      metalness: 0.02,
      side: THREE.FrontSide,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });

    // Back specification & regulatory label
    const backLabelMaterial = new THREE.MeshStandardMaterial({
      name: 'Regulatory_Back_Label',
      map: backLabelDiffuse,
      roughnessMap: backLabelRoughness,
      transparent: false,
      alphaTest: 0.5,
      roughness: 0.88,
      metalness: 0.02,
      side: THREE.FrontSide,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });

    // Neck foil sleeve wrapping the cylindrical neck
    const neckLabelMaterial = new THREE.MeshStandardMaterial({
      name: 'Royal_Neck_Sleeve',
      map: neckLabelDiffuse,
      transparent: true,
      alphaTest: 0.05,
      roughness: 0.35,
      metalness: 0.25,
      side: THREE.FrontSide,
    });

    // Natural cork stopper shank inside clear neck
    const corkMaterial = new THREE.MeshStandardMaterial({
      name: 'Natural_Cork_Stopper',
      map: corkDiffuse,
      color: new THREE.Color('#E4CDB0'),
      roughness: 0.85,
      metalness: 0.0,
    });

    // Polished chrome/silver ring accent at bottom of cap
    const capSilverMaterial = new THREE.MeshStandardMaterial({
      name: 'Cap_Silver_Rim',
      color: new THREE.Color('#E8EFF8'),
      metalness: 0.95,
      roughness: 0.10,
    });

    // Royal deep navy blue cap with metallic sheen
    const capBodyMaterial = new THREE.MeshStandardMaterial({
      name: 'Royal_Navy_Cap_Body',
      color: new THREE.Color('#0A1E4A'),
      roughness: 0.20,
      metalness: 0.75,
    });

    // Top cap crown seal medallion
    const capCrownMaterial = new THREE.MeshStandardMaterial({
      name: 'Royal_Cap_Crown_Medallion',
      map: capCrownDiffuse,
      roughness: 0.20,
      metalness: 0.85,
    });

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        switch (mesh.name) {
          case 'Back_Label':
            mesh.material = backLabelMaterial;
            mesh.renderOrder = 1;
            break;
          case 'Back_Label_Backing':
            mesh.material = labelBackingMaterial;
            mesh.renderOrder = 2;
            break;
          case 'Cork_Stopper':
            mesh.material = corkMaterial;
            mesh.renderOrder = 1;
            break;
          case 'Whisky_Liquid':
            mesh.material = liquidMaterial;
            mesh.renderOrder = 3;
            break;
          case 'Bottle_Glass':
            mesh.visible = false;
            mesh.material = glassMaterial;
            mesh.renderOrder = 5;
            break;
          case 'Front_Label_Backing':
            mesh.material = labelBackingMaterial;
            mesh.renderOrder = 9;
            break;
          case 'Front_Label':
            mesh.material = frontLabelMaterial;
            mesh.renderOrder = 10;
            break;
          case 'Neck_Label':
            mesh.material = neckLabelMaterial;
            mesh.renderOrder = 10;
            break;
          case 'Cap_Silver_Rim':
            mesh.material = capSilverMaterial;
            mesh.renderOrder = 10;
            break;
          case 'Bottle_Cap':
          case 'Bottle_Cap_Top':
            mesh.material = capBodyMaterial;
            mesh.renderOrder = 10;
            break;
          case 'Cap_Crown':
            mesh.material = capCrownMaterial;
            mesh.renderOrder = 11;
            break;
          default:
            break;
        }
      }
    });

    return cloned;
  }, [
    scene,
    frontLabelDiffuse,
    frontLabelRoughness,
    frontLabelNormal,
    backLabelDiffuse,
    backLabelRoughness,
    neckLabelDiffuse,
    corkDiffuse,
    capCrownDiffuse,
    whiskyDiffuse,
  ]);

  // Initial rotation based on targetView
  const initialRotY = targetView === 'back' ? Math.PI : targetView === 'angle' ? -0.45 : 0;

  // Frame animation: lerp rotation and position based on scroll and pointer
  useFrame((state, delta) => {
    if (!rotatorGroup.current) return;

    let targetRotY = 0;
    let targetRotX = 0;
    let targetRotZ = 0;

    if (targetView === 'front') {
      targetRotY = 0;
      targetRotX = 0;
    } else if (targetView === 'back') {
      targetRotY = Math.PI;
      targetRotX = 0;
    } else if (targetView === 'angle') {
      targetRotY = -0.45;
      targetRotX = 0.05;
    } else if (autoRotate) {
      rotatorGroup.current.rotation.y += delta * 0.75;
      return;
    } else {
      targetRotY = (scrollProgress * Math.PI * 2.2) - 0.45;
      targetRotX = Math.sin(scrollProgress * Math.PI * 2) * 0.06;
      targetRotZ = Math.cos(scrollProgress * Math.PI) * 0.03;
    }

    if (!isDragging) {
      const pointer = state.pointer;
      targetRotY += pointer.x * 0.15;
      targetRotX += -pointer.y * 0.08;

      rotatorGroup.current.rotation.y = THREE.MathUtils.lerp(
        rotatorGroup.current.rotation.y,
        targetRotY,
        0.12
      );
      rotatorGroup.current.rotation.x = THREE.MathUtils.lerp(
        rotatorGroup.current.rotation.x,
        targetRotX,
        0.12
      );
      rotatorGroup.current.rotation.z = THREE.MathUtils.lerp(
        rotatorGroup.current.rotation.z,
        targetRotZ,
        0.12
      );
    }
  });

  return (
    <>
      {/* 1. STUDIO LIGHTING ENVIRONMENT WITH SOFTBOXES & CAUSTICS */}
      <Environment resolution={256}>
        <group>
          {/* Key White Softbox Strip (Left contour reflection) */}
          <Lightformer
            form="rect"
            intensity={3.2}
            position={[-4, 0.5, 3]}
            scale={[1.2, 8, 1]}
            color="#FFFFFF"
          />

          {/* Warm Fill Softbox Strip (Right contour reflection) */}
          <Lightformer
            form="rect"
            intensity={2.6}
            position={[4, 0.5, 3]}
            scale={[1.2, 8, 1]}
            color="#FFF4E0"
          />

          {/* Radiant Amber Backlight (Illuminates whisky volume with warmth) */}
          <Lightformer
            form="rect"
            intensity={4.2}
            position={[0, 0.2, -4]}
            scale={[4, 7, 1]}
            color="#E67E18"
          />

          {/* Overhead Ring Softbox (Highlights shoulders, collar, and cap rim) */}
          <Lightformer
            form="ring"
            intensity={2.8}
            position={[0, 5, 1]}
            scale={[4, 4, 1]}
            target={[0, 0, 0]}
            color="#FFFFFF"
          />
        </group>
      </Environment>

      {/* Direct Physical Lights */}
      <ambientLight intensity={0.30} />
      {/* Soft Front Key (Even illumination that preserves deep royal navy blue paper) */}
      <directionalLight position={[0, 2.5, 3.8]} intensity={0.45} color="#FFFFFF" />
      {/* Left Sharp Studio Rim Strip (Crisp glass contour reflection) */}
      <directionalLight position={[-4, 0.5, 2.5]} intensity={1.8} color="#FFFFFF" />
      {/* Right Warm Studio Fill Strip */}
      <directionalLight position={[4, 0.5, 2.5]} intensity={1.5} color="#FFF8F0" />
      {/* Radiant Amber Malt Backlight (Illuminates whisky volume with glowing warmth) */}
      <pointLight position={[0, 0.2, -2.5]} intensity={4.5} distance={7} color="#FF8810" />

      {/* Luxury Studio 3D Backdrop (Enables realistic glass transmission of royal navy space) */}
      <mesh position={[0, 0, -4.5]} scale={[30, 20, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#030E28" />
      </mesh>

      {/* Ambient Gold Particles */}
      <Sparkles count={25} scale={8} size={1.8} speed={0.2} opacity={0.3} color="#E2B774" />

      {enableOrbit && (
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.8}
          onStart={() => {
            setIsDragging(true);
            onUserInteracting && onUserInteracting(true);
          }}
          onEnd={() => {
            setIsDragging(false);
            onUserInteracting && onUserInteracting(false);
          }}
        />
      )}

      <Float rotationIntensity={0.012} floatIntensity={0.02} speed={0.8}>
        <group ref={bottleGroup} position={[0, positionY, 0]} scale={scale}>
          <group ref={rotatorGroup} rotation={[0, initialRotY, 0]}>
            {/* Centering Group: shifts geometry so center of bottle is perfectly at eye-level (0, 0, 0) */}
            <group position={[0, -0.27, 0]}>
              {/* Cloned GLB hierarchy with custom luxury PBR materials */}
              <primitive object={model} />
            </group>
          </group>
        </group>
      </Float>
    </>
  );
};

useGLTF.preload('/models/patiyala-palace-bottle.glb');

