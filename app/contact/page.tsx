import { Mail, Link } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-24 px-4 border-b border-white/10">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Get in Touch</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Have an exciting opportunity or just want to chat? I'd love to hear from you. Fill out the form below or reach out directly through any of the channels.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <a
              href="mailto:usmanfrasu@gmail.com"
              className="glass-effect p-8 border border-white/10 card-hover text-center"
            >
              <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-400 hover:text-cyan-300 transition-colors truncate">
                usmanfrasu@gmail.com
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muhammad-usman-mba/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-8 border border-white/10 card-hover text-center"
            >
              <Link className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View Profile
              </p>
            </a>
          </div>

          {/* Contact Form */}
          <div id="form" className="glass-effect p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8">Send me a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 px-4 bg-black/30 border-t border-white/10">
        <div className="container-custom max-w-2xl text-center">
          <p className="text-gray-400">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Typically respond within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}
