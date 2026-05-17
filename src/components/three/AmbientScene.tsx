import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';

/**
 * Pleasant, calm 3D ambient backdrop — soft floating blobs + subtle sparkles.
 * No characters, no harsh wireframes. Sits behind all content site-wide.
 */
const SoftBlob = ({
  position,
  color,
  scale = 1,
  speed = 1.2,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) => (
  <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.4}>
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.35}
        roughness={0.25}
        metalness={0.4}
        distort={0.45}
        speed={1.6}
        transparent
        opacity={0.55}
      />
    </mesh>
  </Float>
);

const AmbientScene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#0a0a14']} />
          <fog attach="fog" args={['#0a0a14', 10, 22]} />

          <ambientLight intensity={0.5} />
          <pointLight position={[6, 5, 5]} intensity={1.1} color="#00f0ff" />
          <pointLight position={[-6, -3, 2]} intensity={0.9} color="#0066ff" />
          <pointLight position={[0, -5, 3]} intensity={0.5} color="#ff6b35" />

          <SoftBlob position={[-5.5, 2.2, -6]} color="#00f0ff" scale={0.9} speed={1} />
          <SoftBlob position={[5.8, -1.8, -7]} color="#0066ff" scale={1.1} speed={0.9} />
          <SoftBlob position={[-4.5, -2.6, -8]} color="#ff6b35" scale={0.7} speed={1.3} />
          <SoftBlob position={[5, 2.8, -9]} color="#00f0ff" scale={0.8} speed={1.1} />
          <SoftBlob position={[0, 0, -12]} color="#0066ff" scale={1.6} speed={0.7} />

          <Sparkles count={60} scale={[16, 12, 10]} size={2} speed={0.3} color="#9ee9ff" opacity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AmbientScene;
