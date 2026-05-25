import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CursorGlow } from './components/ui/CursorGlow';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Philosophy } from './sections/Philosophy';
import { Services } from './sections/Services';
import { Contact } from './sections/Contact';

function Header() {
  const { theme, toggle } = useTheme();
  return (
    <header className="fixed top-0 left-0 w-full z-40 px-8 py-6 flex items-center justify-between">
      {/* Логотип */}
      <div className="font-mono text-white text-2xl font-bold tracking-tight">
        V<span className="text-[#ffb7c5]">&</span>B
      </div>
      {/* Кнопка смены темы */}
      <button
        onClick={toggle}
        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
        aria-label="Переключить тему"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <CursorGlow />
      <main className="relative">
        <Hero />
        <Projects />
        <Philosophy />
        <Services />
        <Contact />
      </main>
      <footer className="py-8 text-center text-white/40 text-sm">
        © 2025 Void & Bloom. Все права защищены.
      </footer>
    </ThemeProvider>
  );
}