import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Environment } from '@react-three/drei';
import Astronaut from './Astronaut';
import FloatingTechOrb from './FloatingTechOrb';

/**
 * Full-viewport hero scene: drifting astronaut surrounded by neon tech orbs and a starfield.
 * Pointer-events disabled so overlay UI remains fully interactive.
 */
const HeroScene = () => {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.4, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0a0a14']} />
        <fog attach="fog" args={['#0a0a14', 8, 18]} />

        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.35} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#00f0ff" />
          <pointLight position={[-6, -2, -3]} intensity={0.9} color="#0066ff" />
          <pointLight position={[0, -4, 4]} intensity={0.7} color="#ff6b35" />
          <directionalLight position={[3, 6, 3]} intensity={0.6} />

          {/* Star field */}
          <Stars radius={80} depth={50} count={3500} factor={4} saturation={0} fade speed={0.6} />

          {/* Astronaut centerpiece */}
          <Astronaut scale={1.05} />

          {/* Surrounding tech orbs */}
          <FloatingTechOrb position={[-3.2, 1.4, -1]} color="#00f0ff" geometry="icosahedron" scale={0.55} />
          <FloatingTechOrb position={[3, 1.6, -0.5]} color="#0066ff" geometry="torus" scale={0.55} />
          <FloatingTechOrb position={[-2.8, -1.6, 0.5]} color="#ff6b35" geometry="octahedron" scale={0.65} />
          <FloatingTechOrb position={[3.2, -1.2, -1.2]} color="#00f0ff" geometry="octahedron" scale={0.5} />
          <FloatingTechOrb position={[-4.2, 0.2, -2.5]} color="#0066ff" geometry="icosahedron" scale={0.4} />
          <FloatingTechOrb position={[4.2, 0.4, -2]} color="#ff6b35" geometry="torus" scale={0.4} />

          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
