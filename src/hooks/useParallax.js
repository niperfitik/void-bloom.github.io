import { useEffect, useRef, useCallback } from 'react';

export function useParallax(speed = 0.5) {
  const ref = useRef(null);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const scrollY = window.scrollY;
    const offset = scrollY - (scrollY + rect.top) * speed;
    element.style.transform = `translateY(${offset * speed}px)`;
  }, [speed]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return ref;
}