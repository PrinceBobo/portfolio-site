import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Platform',
      description: 'Enterprise-grade analytics platform leveraging machine learning for predictive insights and real-time data visualization.',
      tags: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-blue-600 to-cyan-500',
      status: 'Featured',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Next.js E-Commerce Platform',
      description: 'Full-featured e-commerce solution with AI-powered product recommendations, built with Next.js and headless CMS integration.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'AI'],
      image: 'bg-gradient-to-br from-purple-600 to-pink-500',
      status: 'Featured',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Real-Time Collaboration Tool',
      description: 'WebSocket-based collaborative editor with AI suggestions, version control, and team management features.',
      tags: ['Node.js', 'WebSockets', 'React', 'Redis', 'OpenAI'],
      image: 'bg-gradient-to-br from-green-600 to-teal-500',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Mobile Finance App',
      description: 'Cross-platform mobile application for personal finance management with ML-powered budgeting and investment insights.',
      tags: ['React Native', 'JavaScript', 'Firebase', 'Machine Learning'],
      image: 'bg-gradient-to-br from-orange-600 to-red-500',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      description: 'Custom dashboard for a B2B SaaS platform with real-time metrics, advanced filtering, and data export capabilities.',
      tags: ['Vue.js', 'Node.js', 'GraphQL', 'D3.js'],
      image: 'bg-gradient-to-br from-indigo-600 to-purple-500',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Open Source CLI Tool',
      description: 'Developer-friendly CLI tool for automating deployment workflows with templates and multi-environment support.',
      tags: ['TypeScript', 'Node.js', 'Open Source'],
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
            Showcasing a selection of projects I've built, led, and contributed to. Each demonstrates my commitment to quality, innovation, and solving real-world problems.
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
                    <div className={`absolute inset-0 ${project.image} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
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
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
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
                    <div className={`w-12 h-12 rounded-lg ${project.image} opacity-30 mb-4`} />
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
                    <a
                      href={project.link}
                      className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                    >
                      View
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={project.github}
                      className="text-gray-400 text-sm hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                    >
                      Code
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
                <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <p className="text-gray-400">Game Projects</p>
              </div>

              <div className="glass-effect p-8 border border-white/10 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Unity</div>
                <p className="text-gray-400">Expert Level</p>
              </div>

              <div className="glass-effect p-8 border border-white/10 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>

            <div className="glass-effect p-12 border border-cyan-500/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Have an exciting project in mind?</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in discussing new ventures, collaborations, and opportunities that push the boundaries of what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:usmanfrasu@gmail.com" className="btn-primary">
                  Start a Project
                </a>
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