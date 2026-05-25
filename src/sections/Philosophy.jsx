import { useInView } from '../hooks/useInView';

function PhilosophySection() {
  const [penRef, penInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl mb-8">Наша философия</h2>
          <div className="prose prose-invert text-white/80">
            <p className="text-lg leading-relaxed">
              <span className="float-left text-7xl font-display text-[#ffb7c5] mr-4 leading-none">М</span>ы верим, что каждая
              цифровая вселенная начинается с пустоты — чистого холста, который зацветает смыслами. Void & Bloom — это
              баланс между минимализмом и выразительностью.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Мы не просто рисуем интерфейсы — мы создаём эмоциональные переживания, где каждая деталь дышит.
              Технология служит эстетике, а код превращается в поэзию.
            </p>
          </div>
        </div>
        <div ref={penRef} className="flex justify-center">
          <svg
            width="280"
            height="280"
            viewBox="0 0 280 280"
            className={`w-64 h-64 md:w-auto md:h-auto ${penInView ? 'animate-draw' : ''}`}
          >
            {/* Перо и чернильный след */}
            <path
              d="M140 40 Q 180 90 200 150 Q 220 210 180 240 Q 140 260 100 240 Q 60 210 80 150 Q 100 90 140 40 Z"
              fill="none"
              stroke="url(#penGradient)"
              strokeWidth="2"
              strokeDasharray="1"
              strokeDashoffset="1"
            />
            <path
              d="M100 180 Q 130 220 160 180"
              fill="none"
              stroke="#6de0ff"
              strokeWidth="2"
              strokeDasharray="1"
              strokeDashoffset="1"
            />
            <defs>
              <linearGradient id="penGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffb7c5" />
                <stop offset="100%" stopColor="#6de0ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

export const Philosophy = PhilosophySection; // без HOC, так как анимация пера встроена