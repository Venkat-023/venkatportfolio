import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/** Soft radial gradient texture (generated once) for nebula sprites. */
const makeNebulaTexture = () => {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.35)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
};

/**
 * Interstellar / deep-space ambient backdrop.
 * Layered starfields + a slowly rotating accretion-disk "wormhole" + nebula dust.
 * No floating shapes in the foreground — content stays the hero.
 */

const Wormhole = () => {
  const disk = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (disk.current) disk.current.rotation.z = t * 0.05;
    if (ring.current) ring.current.rotation.z = -t * 0.03;
    if (glow.current) {
      const s = 1 + Math.sin(t * 0.6) * 0.04;
      glow.current.scale.set(s, s, s);
    }
  });

  return (
    <group position={[3.5, -1.2, -14]} rotation={[Math.PI / 2.6, 0, 0.4]}>
      {/* outer accretion disk */}
      <mesh ref={disk}>
        <ringGeometry args={[2.2, 4.6, 128]} />
        <meshBasicMaterial
          color="#ffb066"
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {/* inner hot ring */}
      <mesh ref={ring}>
        <ringGeometry args={[1.55, 2.3, 128]} />
        <meshBasicMaterial
          color="#9be8ff"
          transparent
          opacity={0.55}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {/* event horizon */}
      <mesh>
        <circleGeometry args={[1.45, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      {/* halo glow */}
      <mesh ref={glow} rotation={[-Math.PI / 2.6, 0, 0]}>
        <sphereGeometry args={[1.7, 32, 32]} />
        <meshBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

const NebulaCloud = ({
  position,
  color,
  scale = 6,
  opacity = 0.18,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  opacity?: number;
}) => (
  <mesh position={position} scale={scale}>
    <sphereGeometry args={[1, 32, 32]} />
    <meshBasicMaterial
      color={color}
      transparent
      opacity={opacity}
      blending={THREE.AdditiveBlending}
      depthWrite={false}
    />
  </mesh>
);

const DriftingStars = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.01;
  });
  return (
    <group ref={ref}>
      <Stars radius={120} depth={70} count={5500} factor={4} saturation={0} fade speed={0.3} />
    </group>
  );
};

const AmbientScene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#04040c']} />
          <fog attach="fog" args={['#04040c', 14, 30]} />

          <ambientLight intensity={0.3} />

          {/* deep star layers */}
          <DriftingStars />
          <Stars radius={40} depth={20} count={1200} factor={2} saturation={0} fade speed={0.6} />

          {/* nebula clouds — large, soft, additive */}
          <NebulaCloud position={[-7, 3, -15]} color="#0066ff" scale={7} opacity={0.16} />
          <NebulaCloud position={[8, -2, -18]} color="#00f0ff" scale={8} opacity={0.12} />
          <NebulaCloud position={[-4, -5, -20]} color="#ff6b35" scale={6} opacity={0.1} />
          <NebulaCloud position={[2, 6, -22]} color="#7a3aff" scale={9} opacity={0.1} />

          {/* the wormhole / black hole centerpiece — far away, top-right */}
          <Wormhole />

          {/* cosmic dust drifting through space */}
          <Sparkles count={120} scale={[24, 16, 14]} size={1.6} speed={0.25} color="#bfeaff" opacity={0.55} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AmbientScene;
