import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
          <div className="underline-accent" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          The page you're looking for has ventured into uncharted territory. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Return Home
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/portfolio" className="btn-secondary">
            Explore Portfolio
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Need help? <a href="mailto:usman@example.com" className="text-accent hover:text-accent-dark transition-colors">Contact me</a>
          </p>
        </div>
      </div>
    </div>
  );
}
