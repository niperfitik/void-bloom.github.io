import { useState, useRef } from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { Modal } from '../components/ui/Modal';
import { withReveal } from '../components/ui/withReveal';

const projectsData = [
  {
    id: 1,
    title: 'Эфирный брендинг',
    desc: 'Айдентика для фестиваля света',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <circle cx="60" cy="60" r="40" fill="none" stroke="#ffb7c5" strokeWidth="2" />
        <circle cx="100" cy="60" r="30" fill="none" stroke="#6de0ff" strokeWidth="2" />
        <circle cx="140" cy="60" r="20" fill="none" stroke="#ffb7c5" strokeWidth="2" />
        <path d="M30 60 L170 60" stroke="white" strokeWidth="0.5" opacity="0.5" />
      </svg>
    ),
    gallery: [
      <svg viewBox="0 0 100 100" className="w-full h-48"><rect width="100" height="100" fill="#ffb7c5" opacity="0.8"/></svg>,
      <svg viewBox="0 0 100 100" className="w-full h-48"><circle cx="50" cy="50" r="40" fill="#6de0ff" opacity="0.6"/></svg>,
      <svg viewBox="0 0 100 100" className="w-full h-48"><polygon points="50,10 90,90 10,90" fill="#ffb7c5"/></svg>,
    ],
  },
  {
    id: 2,
    title: 'Интерфейс для AI-ассистента',
    desc: 'UX/UI дизайн сложной платформы',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="20" y="20" width="160" height="80" rx="10" fill="none" stroke="#6de0ff" strokeWidth="2" />
        <line x1="40" y1="50" x2="160" y2="50" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <circle cx="60" cy="35" r="5" fill="#ffb7c5" />
        <circle cx="80" cy="35" r="5" fill="#ffb7c5" />
        <circle cx="100" cy="35" r="5" fill="#ffb7c5" />
      </svg>
    ),
    gallery: [<div className="w-full h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl" />],
  },
  {
    id: 3,
    title: 'Веб-сайт для арт-галереи',
    desc: 'Разработка и анимации',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="30" y="40" width="60" height="40" fill="none" stroke="#ffb7c5" strokeWidth="2" />
        <rect x="110" y="40" width="60" height="40" fill="none" stroke="#6de0ff" strokeWidth="2" />
        <line x1="50" y1="60" x2="70" y2="60" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="130" y1="60" x2="150" y2="60" stroke="white" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
    gallery: [],
  },
  {
    id: 4,
    title: 'Мобильное приложение',
    desc: 'Концепт iOS и Android',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="60" y="20" width="80" height="80" rx="12" fill="none" stroke="#ffb7c5" strokeWidth="2" />
        <circle cx="100" cy="55" r="12" fill="#6de0ff" />
      </svg>
    ),
    gallery: [],
  },
  {
    id: 5,
    title: 'Генеративный бренд',
    desc: 'Динамическая айдентика',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <path d="M20 100 Q 100 20 180 100" fill="none" stroke="#6de0ff" strokeWidth="2" />
        <circle cx="100" cy="60" r="8" fill="#ffb7c5" />
      </svg>
    ),
    gallery: [],
  },
];

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="relative flex-shrink-0 w-72 md:w-80 h-96 cursor-pointer group transition-all duration-700 ease-spring hover:w-96 hover:shadow-2xl"
      onClick={() => onClick(project)}
    >
      <GlassCard blur={15} opacity={0.06} borderOpacity={0.12} className="h-full flex flex-col overflow-hidden">
        <div className="h-48 bg-white/5 flex items-center justify-center p-4 transition-transform duration-700 group-hover:scale-105">
          {project.svg}
        </div>
        <GlassCard.Body className="flex flex-col justify-center text-center">
          <h3 className="font-display text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-white/70">{project.desc}</p>
        </GlassCard.Body>
      </GlassCard>
    </div>
  );
}

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl mb-16 text-center">Избранные проекты</h2>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projectsData.map((p) => (
          <div key={p.id} className="snap-center">
            <ProjectCard project={p} onClick={setSelectedProject} />
          </div>
        ))}
      </div>
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div>
            <h3 className="font-display text-2xl mb-4">{selectedProject.title}</h3>
            <p className="text-white/70 mb-6">{selectedProject.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.gallery.length > 0 ? (
                selectedProject.gallery.map((item, i) => <div key={i}>{item}</div>)
              ) : (
                <div className="w-full h-48 flex items-center justify-center bg-white/10 rounded-xl">
                  <span className="text-white/30">Галерея в разработке</span>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export const Projects = withReveal(ProjectsSection, 'animate-fade-up');