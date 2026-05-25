import { useEffect, useRef, useState } from 'react';

export function useLazyImage(src) {
  const imgRef = useRef(null);
  const [loadedSrc, setLoadedSrc] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadedSrc(src);
        observer.disconnect();
      }
    });
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [src]);

  return [imgRef, loadedSrc];
}