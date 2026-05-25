import { GlassCard } from '../components/ui/GlassCard';
import { withReveal } from '../components/ui/withReveal';

function ContactSection() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <GlassCard blur={30} opacity={0.1} borderOpacity={0.2} className="p-8 md:p-12">
        <h2 className="font-display text-4xl mb-8 text-center">Связаться с нами</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Имя"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#ffb7c5] focus:shadow-[0_0_15px_rgba(255,183,197,0.3)] transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#ffb7c5] focus:shadow-[0_0_15px_rgba(255,183,197,0.3)] transition-all duration-300"
            />
          </div>
          <div>
            <textarea
              placeholder="Ваше сообщение"
              rows="5"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#ffb7c5] focus:shadow-[0_0_15px_rgba(255,183,197,0.3)] transition-all duration-300 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#ffb7c5] to-[#6de0ff] text-void-dark font-display font-semibold py-4 rounded-2xl hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
          >
            Отправить
          </button>
        </form>
      </GlassCard>
    </section>
  );
}

export const Contact = withReveal(ContactSection, 'animate-fade-up');