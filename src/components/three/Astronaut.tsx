import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Stylized astronaut built from primitive shapes — no external GLTF required.
 * Slow rotation + Float wrapper gives a calm "drifting in space" feel.
 */
const Astronaut = ({ scale = 1 }: { scale?: number }) => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.3) * 0.4;
    group.current.rotation.z = Math.sin(t * 0.4) * 0.05;
  });

  // Materials
  const suitMat = (
    <meshStandardMaterial
      color="#e6efff"
      roughness={0.35}
      metalness={0.25}
      emissive="#0a1428"
      emissiveIntensity={0.3}
    />
  );
  const accentMat = (
    <meshStandardMaterial
      color="#00f0ff"
      emissive="#00f0ff"
      emissiveIntensity={1.6}
      roughness={0.2}
      metalness={0.6}
    />
  );
  const visorMat = (
    <meshPhysicalMaterial
      color="#001020"
      emissive="#0066ff"
      emissiveIntensity={0.8}
      roughness={0.05}
      metalness={0.9}
      clearcoat={1}
      clearcoatRoughness={0.05}
    />
  );
  const darkMat = (
    <meshStandardMaterial color="#1a1a24" roughness={0.6} metalness={0.4} />
  );

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={group} scale={scale} position={[0, -0.2, 0]}>
        {/* Helmet */}
        <mesh position={[0, 1.55, 0]} castShadow>
          <sphereGeometry args={[0.55, 48, 48]} />
          {suitMat}
        </mesh>
        {/* Visor */}
        <mesh position={[0, 1.58, 0.18]}>
          <sphereGeometry args={[0.42, 48, 48, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
          {visorMat}
        </mesh>
        {/* Helmet trim */}
        <mesh position={[0, 1.05, 0]}>
          <torusGeometry args={[0.42, 0.06, 16, 48]} />
          {accentMat}
        </mesh>

        {/* Torso */}
        <mesh position={[0, 0.45, 0]}>
          <capsuleGeometry args={[0.55, 0.7, 12, 24]} />
          {suitMat}
        </mesh>

        {/* Chest control panel */}
        <mesh position={[0, 0.55, 0.5]}>
          <boxGeometry args={[0.45, 0.3, 0.08]} />
          {darkMat}
        </mesh>
        <mesh position={[-0.1, 0.6, 0.55]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          {accentMat}
        </mesh>
        <mesh position={[0.05, 0.6, 0.55]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#ff6b35" emissive="#ff6b35" emissiveIntensity={1.4} />
        </mesh>

        {/* Backpack */}
        <mesh position={[0, 0.5, -0.5]}>
          <boxGeometry args={[0.7, 0.85, 0.35]} />
          {suitMat}
        </mesh>
        <mesh position={[0, 0.5, -0.7]}>
          <boxGeometry args={[0.5, 0.55, 0.05]} />
          {accentMat}
        </mesh>

        {/* Arms */}
        <group position={[-0.65, 0.55, 0]} rotation={[0, 0, 0.4]}>
          <mesh>
            <capsuleGeometry args={[0.18, 0.7, 8, 16]} />
            {suitMat}
          </mesh>
          <mesh position={[0, -0.55, 0]}>
            <sphereGeometry args={[0.2, 24, 24]} />
            {darkMat}
          </mesh>
        </group>
        <group position={[0.65, 0.55, 0]} rotation={[0, 0, -0.4]}>
          <mesh>
            <capsuleGeometry args={[0.18, 0.7, 8, 16]} />
            {suitMat}
          </mesh>
          <mesh position={[0, -0.55, 0]}>
            <sphereGeometry args={[0.2, 24, 24]} />
            {darkMat}
          </mesh>
        </group>

        {/* Legs */}
        <group position={[-0.25, -0.35, 0]}>
          <mesh>
            <capsuleGeometry args={[0.2, 0.8, 8, 16]} />
            {suitMat}
          </mesh>
          <mesh position={[0, -0.65, 0.05]}>
            <boxGeometry args={[0.28, 0.18, 0.42]} />
            {darkMat}
          </mesh>
        </group>
        <group position={[0.25, -0.35, 0]}>
          <mesh>
            <capsuleGeometry args={[0.2, 0.8, 8, 16]} />
            {suitMat}
          </mesh>
          <mesh position={[0, -0.65, 0.05]}>
            <boxGeometry args={[0.28, 0.18, 0.42]} />
            {darkMat}
          </mesh>
        </group>

        {/* Antenna */}
        <mesh position={[0.3, 2.05, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.35, 8]} />
          {darkMat}
        </mesh>
        <mesh position={[0.3, 2.25, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          {accentMat}
        </mesh>
      </group>
    </Float>
  );
};

export default Astronaut;
