import { Award, Briefcase, Code, Zap } from 'lucide-react';

export default function About() {
  const careerJourney = [
    {
      year: '2025',
      title: 'Game Developer & Business Development',
      company: 'KIWI CREATIONS',
      description: 'Current role developing engaging gaming experiences with Unity. Also leading business development initiatives and telemarketing efforts. Focused on gameplay mechanics, performance optimization, creative game design, and strategic partnerships.',
      icon: Zap,
    },
    {
      year: '2023-2025',
      title: 'MBA - Business Administration',
      company: 'Lahore University of Management Sciences',
      description: 'Completed Master of Business Administration focusing on business strategy and management practices.',
      icon: Award,
    },
    {
      year: '2021-2023',
      title: 'Senior Game Developer',
      company: 'KIWI CREATIONS',
      description: 'Led multiple game development projects using Unity. Managed a team of developers and oversaw implementation of complex gameplay systems.',
      icon: Code,
    },
    {
      year: '2021',
      title: 'Game Developer Intern',
      company: 'KIWI CREATIONS',
      description: 'Completed 3-month internship learning fundamentals of game development in the Unity game engine. Worked on core gameplay mechanics and systems.',
      icon: Briefcase,
    },
  ];

  const skills = [
    {
      category: 'Game Development',
      items: ['Unity', 'C#', 'Gameplay Programming', 'Physics Systems', 'UI/UX Design'],
    },
    {
      category: 'Software Engineering',
      items: ['Problem Solving', 'Clean Code', 'System Design', 'Performance Optimization', 'Code Architecture'],
    },
    {
      category: 'AI & Agents',
      items: ['AI Coding', 'Agentic Systems', 'Intelligent Algorithms', 'Decision Systems', 'Automation'],
    },
    {
      category: 'Other Skills',
      items: ['Business Development', 'Telemarketing', 'Team Leadership', 'Git/Version Control', 'Debugging', 'Testing', 'Communication'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-4 border-b border-white/10">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">About Me</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Passionate about leveraging technology to solve complex problems. With a strong foundation in computer science and an MBA in Business Administration, I bring both technical excellence and strategic business acumen to every project.
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
              <p className="text-gray-300 mb-2">2023 | Top-Tier University</p>
              <p className="text-gray-400 text-sm">Focus on Strategic Management and Digital Innovation</p>
            </div>

            <div className="glass-effect p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400 flex items-center gap-2">
                <Award className="w-5 h-5" />
                B.S. Computer Science
              </h3>
              <p className="text-gray-300 mb-2">2020 | University</p>
              <p className="text-gray-400 text-sm">Focus on AI, Machine Learning & Software Systems</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in pushing boundaries and exploring new possibilities. Whether it's adopting cutting-edge technologies or reimagining traditional approaches, innovation drives everything I do.
              </p>
            </div>

            <div className="glass-effect p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Quality Over Speed</h3>
              <p className="text-gray-300 leading-relaxed">
                I prioritize clean, maintainable code and thoughtful design. Building systems that last requires attention to detail, strategic planning, and a commitment to excellence.
              </p>
            </div>

            <div className="glass-effect p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Technology evolves rapidly, and so do I. I'm committed to staying at the forefront of industry trends, exploring emerging technologies, and refining my craft daily.
              </p>
            </div>

            <div className="glass-effect p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Impact Driven</h3>
              <p className="text-gray-300 leading-relaxed">
                Every project I undertake aims to create meaningful change. Whether solving technical challenges or driving business growth, impact is the ultimate measure of success.
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
              <a href="mailto:usman@example.com" className="btn-secondary">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}