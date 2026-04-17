'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-white mb-2">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-white mb-2">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Subject
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Message
        </label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={loading || submitted}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
          submitted
            ? 'bg-green-500/20 border border-green-400 text-green-400'
            : 'btn-primary'
        }`}
      >
        {submitted ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Message sent!
          </>
        ) : loading ? (
          <>
            <div className="animate-spin">
              <Send className="w-5 h-5" />
            </div>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-sm text-gray-400">
        I'll get back to you within 24 hours.
      </p>
    </form>
  );
}
