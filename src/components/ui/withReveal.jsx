import { useInView } from '../../hooks/useInView';

export function withReveal(Component, animationClass = 'animate-fade-up') {
  return function RevealedComponent(props) {
    const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
    return (
      <div ref={ref} className={inView ? animationClass : 'opacity-0'}>
        <Component {...props} />
      </div>
    );
  };
}