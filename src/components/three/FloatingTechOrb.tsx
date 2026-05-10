import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Props {
  position: [number, number, number];
  color?: string;
  scale?: number;
  geometry?: 'icosahedron' | 'torus' | 'octahedron';
}

const FloatingTechOrb = ({ position, color = '#00f0ff', scale = 0.6, geometry = 'icosahedron' }: Props) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.4;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry === 'icosahedron' && <icosahedronGeometry args={[1, 1]} />}
        {geometry === 'torus' && <torusGeometry args={[0.7, 0.25, 16, 64]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.7}
          distort={0.35}
          speed={2}
          wireframe={geometry === 'octahedron'}
        />
      </mesh>
    </Float>
  );
};

export default FloatingTechOrb;
