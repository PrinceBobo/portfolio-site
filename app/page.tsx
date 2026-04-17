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
              <span className="text-white">Game Developer &amp; Software Engineer</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed slide-in-right" style={{ animationDelay: '0.2s' }}>
              I build immersive gaming experiences using Unity and create intelligent software solutions. Specializing in game development, software engineering, and AI-driven applications. Passionate about crafting innovative digital experiences that matter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 slide-in-right" style={{ animationDelay: '0.4s' }}>
              <Link href="/about" className="btn-primary">
                Explore My Work
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">4+</div>
                <div className="text-sm md:text-base text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-sm md:text-base text-gray-400">Game Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">Unity</div>
                <div className="text-sm md:text-base text-gray-400">Expert Level</div>
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
                icon: Code,
                title: 'Game Development',
                description: 'Unity game engine, gameplay mechanics, and immersive interactive experiences.',
              },
              {
                icon: Brain,
                title: 'Software Engineering',
                description: 'Scalable architectures, clean code practices, and maintainable systems.',
              },
              {
                icon: Lightbulb,
                title: 'AI & Agents',
                description: 'AI coding, agentic systems, and intelligent problem-solving solutions.',
              },
              {
                icon: Zap,
                title: 'Problem Solving',
                description: 'Complex challenges solved with innovative and creative approaches.',
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
            <a href="mailto:usman@example.com" className="btn-primary mx-auto">
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
