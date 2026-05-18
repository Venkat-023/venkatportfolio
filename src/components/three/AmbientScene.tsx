import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Realistic space backdrop using an actual NASA/ESO Milky Way equirectangular
 * panorama mapped to the inside of a large sphere (true skybox feel),
 * with a subtle additional star layer for depth and slow camera-relative drift.
 */

// CORS-enabled high-res Milky Way panorama hosted by three.js examples.
const MILKY_WAY_URL =
  'https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg';

const SpaceSky = () => {
  const texture = useLoader(THREE.TextureLoader, MILKY_WAY_URL);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.mapping = THREE.EquirectangularReflectionMapping;
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.005;
  });
  return (
    <mesh ref={ref} scale={[-1, 1, 1]}>
      <sphereGeometry args={[60, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} toneMapped={false} />
    </mesh>
  );
};

const AmbientScene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 0.1], fov: 70 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={<color attach="background" args={['#02030a']} />}>
          <color attach="background" args={['#02030a']} />
          {/* Real Milky Way panorama */}
          <SpaceSky />
          {/* Foreground depth stars */}
          <Stars radius={20} depth={8} count={1500} factor={2} saturation={0} fade speed={0.6} />
        </Suspense>
      </Canvas>
      {/* Subtle vignette so foreground content stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(2,3,10,0.55) 70%, rgba(2,3,10,0.85) 100%)',
        }}
      />
    </div>
  );
};

export default AmbientScene;
