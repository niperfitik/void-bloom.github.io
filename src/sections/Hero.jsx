import { useParallax } from '../hooks/useParallax';
import { GlassCard } from '../components/ui/GlassCard';

const FloatingSphere = ({ size, top, left, speed, color }) => {
  const ref = useParallax(speed);
  return (
    <div
      ref={ref}
      className="absolute rounded-full blur-2xl opacity-40"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
      }}
    />
  );
};

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Параллакс-сферы */}
      <FloatingSphere size="400px" top="10%" left="5%" speed={0.3} color="rgba(255,183,197,0.4)" />
      <FloatingSphere size="500px" top="60%" left="70%" speed={0.5} color="rgba(109,224,255,0.3)" />
      <FloatingSphere size="300px" top="30%" left="50%" speed={0.2} color="rgba(45,27,78,0.8)" />

      <div className="relative z-10 text-center px-6">
        <GlassCard blur={20} opacity={0.08} borderOpacity={0.15} className="max-w-3xl mx-auto p-12">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ffb7c5] to-[#6de0ff]">
            Мы создаём<br />цифровые миры
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Void & Bloom — креативная студия, где пустота встречается с цветом, а идеи обретают форму.
          </p>
          <a
            href="#projects"
            className="inline-block bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-8 py-4 font-display font-medium text-white hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
          >
            Смотреть работы
          </a>
        </GlassCard>
      </div>
    </section>
  );
}