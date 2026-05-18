import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/** Soft radial gradient texture for nebula / glow sprites. */
const makeRadialTexture = (innerAlpha = 1, midStop = 0.35, midAlpha = 0.4) => {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, `rgba(255,255,255,${innerAlpha})`);
  g.addColorStop(midStop, `rgba(255,255,255,${midAlpha})`);
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
};

/** Procedural noisy nebula texture with multi-blob radial gradients. */
const makeNebulaTexture = (colors: string[]) => {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, size, size);
  // Many overlapping soft blobs
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = 40 + Math.random() * 160;
    const c = colors[Math.floor(Math.random() * colors.length)];
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, c);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillRect(0, 0, size, size);
  }
  // Soft fade at edges to a circular mask
  ctx.globalCompositeOperation = 'destination-in';
  const mask = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  mask.addColorStop(0, 'rgba(0,0,0,1)');
  mask.addColorStop(0.7, 'rgba(0,0,0,0.7)');
  mask.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = mask;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
};

/** A slow rotating galaxy made of colored particles in a spiral. */
const Galaxy = ({
  position,
  rotation,
  count = 6000,
  radius = 5,
  arms = 4,
  spin = 1.2,
  randomness = 0.35,
  insideColor = '#ffb066',
  outsideColor = '#3a6dff',
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  count?: number;
  radius?: number;
  arms?: number;
  spin?: number;
  randomness?: number;
  insideColor?: string;
  outsideColor?: string;
}) => {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const cIn = new THREE.Color(insideColor);
    const cOut = new THREE.Color(outsideColor);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.pow(Math.random(), 1.6) * radius;
      const branch = (i % arms) / arms * Math.PI * 2;
      const spinAngle = r * spin;
      const rx = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1)) * randomness * r;
      const ry = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1)) * randomness * r * 0.25;
      const rz = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1)) * randomness * r;
      positions[i3] = Math.cos(branch + spinAngle) * r + rx;
      positions[i3 + 1] = ry;
      positions[i3 + 2] = Math.sin(branch + spinAngle) * r + rz;
      const mixed = cIn.clone().lerp(cOut, r / radius);
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }
    return { positions, colors };
  }, [count, radius, arms, spin, randomness, insideColor, outsideColor]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={ref} position={position} rotation={rotation}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
        transparent
        opacity={0.95}
      />
    </points>
  );
};

/** Supernova: bright core + expanding/pulsing rays and shockwave ring. */
const Supernova = ({ position }: { position: [number, number, number] }) => {
  const core = useRef<THREE.Sprite>(null);
  const flare = useRef<THREE.Sprite>(null);
  const ring = useRef<THREE.Mesh>(null);
  const coreTex = useMemo(() => makeRadialTexture(1, 0.2, 0.6), []);
  const flareTex = useMemo(() => makeRadialTexture(1, 0.5, 0.15), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 1.3) * 0.08;
    if (core.current) core.current.scale.setScalar(1.4 * pulse);
    if (flare.current) {
      const fp = 1 + Math.sin(t * 0.7) * 0.15;
      flare.current.scale.setScalar(5.5 * fp);
      flare.current.material.rotation = t * 0.2;
    }
    if (ring.current) {
      const s = 2.5 + (Math.sin(t * 0.4) + 1) * 0.6;
      ring.current.scale.set(s, s, s);
      (ring.current.material as THREE.MeshBasicMaterial).opacity = 0.25 + Math.sin(t * 0.4) * 0.1;
      ring.current.rotation.z = t * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* outer flare */}
      <sprite ref={flare}>
        <spriteMaterial
          map={flareTex}
          color="#ffd28a"
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>
      {/* hot core */}
      <sprite ref={core}>
        <spriteMaterial
          map={coreTex}
          color="#ffffff"
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>
      {/* shockwave ring */}
      <mesh ref={ring} rotation={[Math.PI / 2.2, 0, 0]}>
        <ringGeometry args={[0.9, 1.05, 96]} />
        <meshBasicMaterial
          color="#9be8ff"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

/** A drifting nebula sprite using a procedural colorful texture. */
const Nebula = ({
  position,
  scale,
  colors,
  opacity = 0.7,
  drift = 0.02,
}: {
  position: [number, number, number];
  scale: number;
  colors: string[];
  opacity?: number;
  drift?: number;
}) => {
  const tex = useMemo(() => makeNebulaTexture(colors), [colors]);
  const ref = useRef<THREE.Sprite>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.material.rotation += drift * 0.01;
      const t = state.clock.getElapsedTime();
      ref.current.position.x = position[0] + Math.sin(t * 0.05) * 0.3;
    }
  });
  return (
    <sprite ref={ref} position={position} scale={[scale, scale, scale]}>
      <spriteMaterial
        map={tex}
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </sprite>
  );
};

/** Slowly rotating dense starfield. */
const DriftingStars = () => {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.008;
  });
  return (
    <group ref={ref}>
      <Stars radius={140} depth={80} count={7000} factor={4.2} saturation={0} fade speed={0.4} />
    </group>
  );
};

const AmbientScene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#02030a']} />
          <fog attach="fog" args={['#02030a', 18, 38]} />

          <ambientLight intensity={0.25} />

          {/* deep multi-layer starfields */}
          <DriftingStars />
          <Stars radius={50} depth={25} count={1800} factor={2.2} saturation={0} fade speed={0.7} />
          <Stars radius={20} depth={10} count={400} factor={1.4} saturation={0} fade speed={1.1} />

          {/* huge background nebulas */}
          <Nebula
            position={[-10, 4, -22]}
            scale={28}
            colors={['rgba(80,40,200,0.55)', 'rgba(255,90,160,0.45)', 'rgba(40,80,255,0.5)']}
            opacity={0.75}
          />
          <Nebula
            position={[12, -3, -26]}
            scale={32}
            colors={['rgba(0,180,255,0.5)', 'rgba(120,60,255,0.45)', 'rgba(255,140,80,0.35)']}
            opacity={0.7}
          />
          <Nebula
            position={[0, -8, -30]}
            scale={36}
            colors={['rgba(255,80,120,0.45)', 'rgba(255,180,90,0.4)', 'rgba(60,40,180,0.5)']}
            opacity={0.6}
          />

          {/* spiral galaxies — far away */}
          <Galaxy
            position={[-7, 3.5, -16]}
            rotation={[Math.PI / 2.4, 0.2, 0.3]}
            radius={4.2}
            count={5500}
            insideColor="#ffd28a"
            outsideColor="#5a8cff"
          />
          <Galaxy
            position={[8, -2, -20]}
            rotation={[Math.PI / 3, -0.4, -0.5]}
            radius={3.4}
            arms={3}
            count={4000}
            insideColor="#ffb0ff"
            outsideColor="#3affff"
          />

          {/* supernova — bright accent */}
          <Supernova position={[4.2, 2.6, -10]} />

          {/* cosmic dust */}
          <Sparkles count={140} scale={[26, 18, 16]} size={1.4} speed={0.25} color="#cfeaff" opacity={0.55} />
          <Sparkles count={60} scale={[18, 12, 10]} size={2.2} speed={0.15} color="#ffd6a8" opacity={0.4} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AmbientScene;
