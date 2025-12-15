import Link from 'next/link'

export default function Page() {
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

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/30 hover:border-cyan-400 transition">
            <div className="text-5xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold text-white mb-3">Version Control</h3>
            <p className="text-gray-400">
              Git-like versioning for every prompt. See diffs, track changes, rollback instantly.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30 hover:border-blue-400 transition">
            <div className="text-5xl mb-4">🧪</div>
            <h3 className="text-xl font-semibold text-white mb-3">Side-by-Side Testing</h3>
            <p className="text-gray-400">
              Compare outputs across versions and models. Know what's better before you ship.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-lg rounded-xl p-8 border border-indigo-500/30 hover:border-indigo-400 transition">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
            <p className="text-gray-400">
              Share prompts, review changes, and manage access—all in one place.
            </p>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 mb-20 border border-white/20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Managing prompts shouldn't be this hard
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <span className="text-red-400 text-2xl flex-shrink-0">✗</span>
              <p className="text-gray-300">Prompts scattered across Notion, code, and Slack</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-red-400 text-2xl flex-shrink-0">✗</span>
              <p className="text-gray-300">No idea which version actually works best</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-red-400 text-2xl flex-shrink-0">✗</span>
              <p className="text-gray-300">Breaking changes with no way to roll back</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-red-400 text-2xl flex-shrink-0">✗</span>
              <p className="text-gray-300">Manual testing is slow and inconsistent</p>
            </div>
          </div>
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
  )
}