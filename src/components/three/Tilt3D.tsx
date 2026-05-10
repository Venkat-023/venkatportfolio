import { useRef, ReactNode, MouseEvent } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt in degrees
  glare?: boolean;
  scale?: number;
}

/**
 * Mouse-driven 3D tilt wrapper. Pure CSS transforms — no extra deps.
 * Adds depth/perspective so any child card feels like a physical 3D surface.
 */
const Tilt3D = ({ children, className = '', max = 10, glare = true, scale = 1.02 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * max * 2;
    const ry = (x - 0.5) * max * 2;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, hsl(var(--primary) / 0.18), transparent 55%)`;
      glareRef.current.style.opacity = '1';
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    if (glareRef.current) glareRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200"
        />
      )}
    </div>
  );
};

export default Tilt3D;
