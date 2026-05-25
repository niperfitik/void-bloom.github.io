import { useTilt } from '../hooks/useTilt';
import { GlassCard } from '../components/ui/GlassCard';
import { withReveal } from '../components/ui/withReveal';

const services = [
  {
    title: 'UI/UX Дизайн',
    desc: 'Интуитивные интерфейсы, которые говорят с пользователем на языке эмоций.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="url(#g1)" strokeWidth="2" />
        <circle cx="24" cy="24" r="6" stroke="url(#g1)" strokeWidth="2" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#ffb7c5" /><stop offset="1" stopColor="#6de0ff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Брендинг',
    desc: 'Айдентика, которая превращает пустоту в узнаваемый образ.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4 L44 24 L24 44 L4 24 Z" stroke="url(#g2)" strokeWidth="2" />
        <circle cx="24" cy="24" r="8" stroke="url(#g2)" strokeWidth="2" />
        <defs><linearGradient id="g2" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#ffb7c5"/><stop offset="1" stopColor="#6de0ff"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: 'Разработка',
    desc: 'Чистый код и передовые технологии для безупречной реализации.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <polyline points="14,28 8,24 14,20" stroke="url(#g3)" strokeWidth="2" />
        <polyline points="34,20 40,24 34,28" stroke="url(#g3)" strokeWidth="2" />
        <line x1="22" y1="18" x2="26" y2="30" stroke="url(#g3)" strokeWidth="2" />
        <defs><linearGradient id="g3" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#ffb7c5"/><stop offset="1" stopColor="#6de0ff"/></linearGradient></defs>
      </svg>
    ),
  },
];

function ServiceCard({ service }) {
  const tiltRef = useTilt(10);

  return (
    <div ref={tiltRef} className="transition-transform duration-200 will-change-transform">
      <GlassCard blur={20} opacity={0.08} borderOpacity={0.15} className="p-8 text-center group cursor-pointer h-full">
        <div className="mb-6 inline-block">{service.icon}</div>
        <h3 className="font-display text-2xl mb-3">{service.title}</h3>
        <p className="text-white/70 text-sm">{service.desc}</p>
      </GlassCard>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl mb-16 text-center">Услуги</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} />
        ))}
      </div>
    </section>
  );
}

export const Services = withReveal(ServicesSection, 'animate-scale-in');