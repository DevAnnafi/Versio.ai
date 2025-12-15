// src/app/page.tsx
import Link from 'next/link';
import { createServerSupabase } from '@/lib/supabase/server';

export default async function Page() {
  // Create server-side Supabase client
  const supabase = createServerSupabase();

  // Fetch prompts for the logged-in user
  const { data: prompts, error } = await supabase
    .from('prompts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching prompts:', error.message);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text">
            Versio.ai
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Version control for AI prompts
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Track every change. Test every version. Ship with confidence.
            The prompt management platform built for AI teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition transform hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              Get Started Free
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition border border-white/20"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* User Prompts List */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Your Prompts</h2>
          {prompts && prompts.length > 0 ? (
            <ul className="list-disc pl-5 text-gray-200">
              {prompts.map((prompt) => (
                <li key={prompt.id} className="mb-2">
                  <strong>{prompt.title}</strong>: {prompt.content}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">You haven’t created any prompts yet.</p>
          )}
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to take control of your prompts?
          </h2>
          <p className="text-gray-400 mb-8">
            Join developers who are shipping AI features faster with Versio.ai
          </p>
          <Link
            href="/signup"
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg font-semibold rounded-lg transition transform hover:scale-105 shadow-lg shadow-cyan-500/50"
          >
            Start Free Today
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2025 Versio.ai • Built for AI teams</p>
        </div>
      </footer>
    </div>
  );
}
