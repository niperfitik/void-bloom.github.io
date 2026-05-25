import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow || window.matchMedia('(pointer: coarse)').matches) return; // не на тач-устройствах

    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-50 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
      style={{
        background: 'radial-gradient(circle, rgba(255,183,197,0.5) 0%, rgba(109,224,255,0.2) 40%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  );
}