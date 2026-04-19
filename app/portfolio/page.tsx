import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  thumbnail?: string;
  status?: string;
  link: string;
  github: string;
};

export default function Portfolio() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Legal Document Generator',
      description: 'SaaS tool for drafting standard legal agreements through an AI-guided chatbot. Supports 12 document templates with real-time live preview and download as PDF, DOCX, or Markdown.',
      tags: ['Next.js 14', 'Express.js', 'MongoDB', 'Google OAuth', 'OpenRouter', 'Docker', 'SSE Streaming'],
      image: 'bg-gradient-to-br from-blue-600 to-cyan-500',
      thumbnail: '/Prelegal.png',
      status: 'Featured',
      link: 'https://prelegal-6r8o.onrender.com/',
      github: 'https://github.com/PrinceBobo/prelegal',
    },
    {
      id: 2,
      title: 'AI Kanban Board',
      description: 'Full-stack project management app with an AI chat assistant that reads the board and directly updates it in response to natural language instructions. Multi-board Kanban with priority, labels, due dates, and checklists.',
      tags: ['Next.js', 'Python FastAPI', 'SQLite', 'OpenRouter', 'Docker', 'SSE Streaming'],
      image: 'bg-gradient-to-br from-purple-600 to-pink-500',
      thumbnail: '/Kanban.png',
      status: 'Featured',
      link: 'https://ai-kanban-board.onrender.com/',
      github: 'https://github.com/PrinceBobo/AI-Kanban-Board',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio website with an AI Digital Twin chatbot that answers questions about my background, projects, and experience.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenRouter', 'Vercel'],
      image: 'bg-gradient-to-br from-green-600 to-teal-500',
      link: 'https://portfolio-website-omega-peach-17.vercel.app/',
      github: '#',
    },
    {
      id: 4,
      title: 'MetaMall — VR E-Commerce Metaverse',
      description: 'Multiplayer VR and mobile E-Commerce Metaverse where users spawn in a 3D mall, try clothing on in-game avatars, and purchase real-world products from brand partners.',
      tags: ['Unity', 'C#', 'VR', 'Multiplayer', 'Mobile'],
      image: 'bg-gradient-to-br from-orange-600 to-red-500',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Hospital Ultrasound Waiting Room Simulation',
      description: 'In-depth analysis of Radiology and OPD operations at a local hospital, focused on reducing patient waiting times. Built Process Flow ER Diagrams and a simulation model optimized on real variables like doctor availability.',
      tags: ['Operations Research', 'Process Modelling', 'Simulation', 'Data Analysis'],
      image: 'bg-gradient-to-br from-indigo-600 to-purple-500',
      thumbnail: '/ShifaProjectThumbnail.png',
      status: 'Featured',
      link: 'https://shifa-mcp-simulation-pruf.vercel.app/',
      github: '#',
    },
    {
      id: 6,
      title: 'Consumer Analytics — EV Bikes',
      description: 'Exploratory and confirmatory consumer research using interviews, focus groups, and questionnaires. Python-powered cluster analysis to profile segments and form a positioning strategy for an EV bike brand.',
      tags: ['Python', 'Data Analysis', 'Consumer Research', 'Clustering'],
      image: 'bg-gradient-to-br from-slate-600 to-gray-500',
      link: '#',
      github: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-4 border-b border-white/10">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Portfolio</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            A selection of projects built using AI-assisted and agentic engineering workflows. Each demonstrates rapid delivery, full-stack architecture, and real-world problem solving.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Featured Projects</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects
              .filter((p) => p.status === 'Featured')
              .map((project) => (
                <div
                  key={project.id}
                  className="group glass-effect border border-white/10 card-hover overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className={`absolute inset-0 ${project.image} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      {project.status === 'Featured' && (
                        <span className="experience-badge">Featured</span>
                      )}
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          GitHub
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-24 px-4 bg-black/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Other Notable Work</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.status !== 'Featured')
              .map((project) => (
                <div
                  key={project.id}
                  className="group glass-effect border border-white/10 card-hover p-6 flex flex-col h-full"
                >
                  {/* Project Header */}
                  <div className="mb-4">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-32 object-cover rounded-lg mb-4 opacity-90"
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-lg ${project.image} opacity-30 mb-4`} />
                    )}
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                      >
                        View
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Open to New Opportunities</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-effect p-8 border border-white/10 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                <p className="text-gray-400">Years Experience</p>
              </div>

              <div className="glass-effect p-8 border border-white/10 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">AI</div>
                <p className="text-gray-400">Agentic Engineering</p>
              </div>

              <div className="glass-effect p-8 border border-white/10 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Live</div>
                <p className="text-gray-400">Deployed Apps</p>
              </div>
            </div>

            <div className="glass-effect p-12 border border-cyan-500/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Have an exciting project in mind?</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in discussing new ventures, collaborations, and opportunities that push the boundaries of what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact#form" className="btn-primary">
                  Start a Project
                </Link>
                <a href="/about" className="btn-secondary">
                  Learn More About Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}