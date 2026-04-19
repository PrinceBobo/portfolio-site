import Link from 'next/link';
import { ArrowRight, Zap, Code, Brain, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">Welcome to my portfolio</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight slide-in-left">
              <span className="gradient-text">Muhammad Usman</span>
              <br />
              <span className="text-white">AI Engineer &amp; Software Developer</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed slide-in-right" style={{ animationDelay: '0.2s' }}>
              Software Engineer with 3+ years of experience, specialized in AI-assisted development and agentic engineering. I build full-stack applications using modern AI coding workflows — multi-agent systems, context engineering, and automated development pipelines with Claude Code, Cursor, and GitHub Copilot.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 slide-in-right" style={{ animationDelay: '0.4s' }}>
              <Link href="/about" className="btn-primary">
                Explore My Work
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact#form" className="btn-secondary">
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">3+</div>
                <div className="text-sm md:text-base text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">AI</div>
                <div className="text-sm md:text-base text-gray-400">Agentic Engineering</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">Full</div>
                <div className="text-sm md:text-base text-gray-400">Stack + AI Apps</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-4">
        <div className="container-custom">
          <h2 className="section-title">Core Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: 'AI Engineering',
                description: 'Building full-stack applications with Claude Code, Cursor, and GitHub Copilot using modern AI coding workflows.',
              },
              {
                icon: Zap,
                title: 'Agentic Engineering',
                description: 'Designing multi-agent systems, sub-agents, hooks, and automated development pipelines.',
              },
              {
                icon: Lightbulb,
                title: 'Vibe Engineering',
                description: 'Rapid prototyping and AI-driven development for fast iteration and reliable delivery.',
              },
              {
                icon: Code,
                title: 'Full-Stack Development',
                description: 'Next.js, Python FastAPI, Express.js, Docker — end-to-end scalable application delivery.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group glass-effect p-6 card-hover border border-white/10"
              >
                <item.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4">
        <div className="container-custom">
          <div className="glass-effect p-12 md:p-16 border border-cyan-500/20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to collaborate?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's build something extraordinary together. I'm always interested in hearing about new projects and opportunities.
            </p>
            <Link href="/contact#form" className="btn-primary mx-auto">
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
