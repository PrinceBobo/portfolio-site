import Link from 'next/link';
import { Award, Briefcase, Code, Zap } from 'lucide-react';

export default function About() {
  const careerJourney = [
    {
      year: 'Nov 2025 - Apr 2026',
      title: 'Software Engineer',
      company: 'Kiwi Creations Pvt. Ltd.',
      description: 'Implemented front-end features and bug fixes while coordinating with the backend team on technical delivery.',
      icon: Zap,
    },
    {
      year: 'Jul 2025 - Oct 2025',
      title: 'Business Development Representative',
      company: 'Business Solutions and Services',
      description: 'Developed lead lists per ICP, conducted multi-channel cold outreach (calls, email, LinkedIn, Upwork), and managed prospects along the sales funnel.',
      icon: Briefcase,
    },
    {
      year: 'Aug 2023 - May 2025',
      title: 'MBA - Business Administration',
      company: 'Lahore University of Management Sciences (LUMS)',
      description: 'Completed MBA with focus on strategy, management consulting, operations, and data analytics. Conducted consulting projects with Shifa Hospital and EV bike market research.',
      icon: Award,
    },
    {
      year: 'Jul 2024 - Aug 2024',
      title: 'Business Analyst / Consultant (Internship)',
      company: 'Kaarvan Crafts Foundation',
      description: 'Interviewed 6 female micro-entrepreneurs and developed detailed Business Growth Plans covering marketing, operations, finance, and pricing.',
      icon: Briefcase,
    },
    {
      year: 'Aug 2021 - Aug 2023',
      title: 'Technical Lead / Senior Game Developer',
      company: 'Kiwi Creations Pvt. Ltd.',
      description: 'Led a team of 4 developers and 1 QA engineer, delivered 10+ game projects, trained interns, and collaborated with senior management on company growth.',
      icon: Code,
    },
  ];

  const skills = [
    {
      category: 'AI Engineering',
      items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'MCP Servers', 'Claude Skills & Plugins', 'Prompt Engineering', 'Context Engineering'],
    },
    {
      category: 'Agentic & Vibe Engineering',
      items: ['Multi-agent Systems', 'Sub-agents & Hooks', 'Ralph Loops', 'Agentic Workflows', 'AI-driven Rapid Prototyping', 'Automated Dev Pipelines'],
    },
    {
      category: 'Full-Stack Development',
      items: ['Next.js', 'Python FastAPI', 'Express.js', 'React', 'REST APIs', 'Docker', 'MongoDB', 'SQLite', 'Firebase', 'SSE Streaming'],
    },
    {
      category: 'Languages & Tools',
      items: ['C#', 'C++', 'Python', 'JavaScript', 'Golang', 'Haskell', 'Git & GitHub', 'Unity', 'Google OAuth', 'Debugging AI Code'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-4 border-b border-white/10">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">About Me</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Software Engineer specialized in AI-assisted development and agentic engineering. I build full-stack applications using modern AI coding workflows — from multi-agent systems and context engineering to automated development pipelines. MBA from LUMS combined with 3+ years of engineering experience.
          </p>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-24 px-4">
        <div className="container-custom">
          <h2 className="section-title">Career Journey</h2>

          <div className="max-w-4xl mx-auto">
            {careerJourney.map((item, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  {index !== careerJourney.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-cyan-400 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12">
                  <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-1">{item.title}</h3>
                  <p className="text-cyan-400 mb-3 font-semibold">{item.company}</p>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24 px-4 bg-black/30">
        <div className="container-custom">
          <h2 className="section-title">Education & Credentials</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400 flex items-center gap-2">
                <Award className="w-5 h-5" />
                MBA in Business Administration
              </h3>
              <p className="text-gray-300 mb-2">Aug 2023 - May 2025 | LUMS</p>
              <p className="text-gray-400 text-sm">Strategy, Management Consulting, Operations, Data Analytics</p>
            </div>

            <div className="glass-effect p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400 flex items-center gap-2">
                <Award className="w-5 h-5" />
                B.S. Computer Science
              </h3>
              <p className="text-gray-300 mb-2">Aug 2017 - Jul 2021 | LUMS (CGPA 3.11)</p>
              <p className="text-gray-400 text-sm">Computer Science, Software Engineering, Algorithms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-4">
        <div className="container-custom">
          <h2 className="section-title">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="glass-effect p-6 border border-white/10">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-24 px-4 bg-black/30">
        <div className="container-custom">
          <h2 className="section-title">My Philosophy</h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="glass-effect p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">AI-First Development</h3>
              <p className="text-gray-300 leading-relaxed">
                I build with AI tools at the core — Claude Code, Cursor, and GitHub Copilot are not add-ons but the primary workflow. This means faster iteration, better architecture, and reliable delivery.
              </p>
            </div>

            <div className="glass-effect p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Agentic Mindset</h3>
              <p className="text-gray-300 leading-relaxed">
                I think in systems and agents — designing pipelines where AI components coordinate autonomously to deliver outcomes with minimal manual intervention.
              </p>
            </div>

            <div className="glass-effect p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Rapid Iteration</h3>
              <p className="text-gray-300 leading-relaxed">
                Vibe engineering means shipping working software fast. I prototype, test, and deploy at a pace that was impossible before modern AI coding tools.
              </p>
            </div>

            <div className="glass-effect p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Impact Driven</h3>
              <p className="text-gray-300 leading-relaxed">
                Every project aims to solve a real problem. Business training from LUMS ensures I build things that matter — not just technically sound, but genuinely useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container-custom max-w-2xl">
          <div className="glass-effect p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-300 mb-8">
              Interested in collaborating or discussing opportunities? I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.linkedin.com/in/muhammad-usman-mba/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                LinkedIn Profile
              </a>
              <Link href="/contact#form" className="btn-secondary">
                Send Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}