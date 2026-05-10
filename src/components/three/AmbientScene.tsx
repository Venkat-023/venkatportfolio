import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import FloatingTechOrb from './FloatingTechOrb';

/**
 * Lightweight 3D ambient backdrop used on every page (excluding the home hero,
 * which has its own richer scene). Keeps the immersive 3D feel cheap.
 */
const AmbientScene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#0a0a14']} />
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#00f0ff" />
          <pointLight position={[-5, -3, -2]} intensity={0.6} color="#0066ff" />

          <Stars radius={60} depth={40} count={2000} factor={3} saturation={0} fade speed={0.4} />

          <FloatingTechOrb position={[-4, 2, -3]} color="#00f0ff" geometry="icosahedron" scale={0.5} />
          <FloatingTechOrb position={[4, -1.5, -4]} color="#0066ff" geometry="torus" scale={0.5} />
          <FloatingTechOrb position={[-3, -2, -5]} color="#ff6b35" geometry="octahedron" scale={0.45} />
          <FloatingTechOrb position={[3.5, 2.2, -5]} color="#00f0ff" geometry="octahedron" scale={0.4} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AmbientScene;
