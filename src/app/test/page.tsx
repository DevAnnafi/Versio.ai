'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function TestPage() {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking')
  const [details, setDetails] = useState<any>({})
  const [error, setError] = useState<string>('')

  useEffect(() => {
    async function testConnection() {
      try {
        // Check environment variables
        const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL
        const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        setDetails(prev => ({
          ...prev,
          envUrl: hasUrl,
          envKey: hasKey,
        }))

        if (!hasUrl || !hasKey) {
          setStatus('error')
          setError('Missing environment variables in .env.local')
          return
        }

        // Test auth connection
        const { data: authData, error: authError } = await supabase.auth.getSession()
        
        setDetails(prev => ({
          ...prev,
          authWorks: !authError,
          authError: authError?.message,
        }))

        // Test database connection
        const { data: dbData, error: dbError } = await supabase
          .from('prompts')
          .select('count')
          .limit(1)

        setDetails(prev => ({
          ...prev,
          dbWorks: !dbError || dbError.message.includes('JWT'),
          dbError: dbError?.message,
        }))

        // If we got this far without critical errors
        if (!authError || authError.message === 'Auth session missing!') {
          setStatus('connected')
        } else {
          setStatus('error')
          setError(authError.message)
        }

      } catch (err) {
        setStatus('error')
        setError(err instanceof Error ? err.message : 'Unknown error')
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-6">
            Supabase Connection Test
          </h1>

          {/* Status */}
          <div className="mb-8">
            {status === 'checking' && (
              <div className="flex items-center space-x-3 text-yellow-400">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400"></div>
                <span>Testing connection...</span>
              </div>
            )}

            {status === 'connected' && (
              <div className="flex items-center space-x-3 text-green-400">
                <span className="text-3xl">✅</span>
                <span className="text-xl font-semibold">Connected!</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center space-x-3 text-red-400">
                <span className="text-3xl">❌</span>
                <span className="text-xl font-semibold">Connection Failed</span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-4 mb-6">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Environment Variables</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SUPABASE_URL:</span>
                  <span className={details.envUrl ? 'text-green-400' : 'text-red-400'}>
                    {details.envUrl ? '✓ Set' : '✗ Missing'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SUPABASE_ANON_KEY:</span>
                  <span className={details.envKey ? 'text-green-400' : 'text-red-400'}>
                    {details.envKey ? '✓ Set' : '✗ Missing'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Connection Tests</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Auth Service:</span>
                  <span className={details.authWorks ? 'text-green-400' : 'text-red-400'}>
                    {details.authWorks ? '✓ Working' : '✗ Failed'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Database:</span>
                  <span className={details.dbWorks ? 'text-green-400' : 'text-red-400'}>
                    {details.dbWorks ? '✓ Working' : '✗ Failed'}
                  </span>
                </div>
              </div>
            </div>

            {(details.authError || details.dbError || error) && (
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>
                <pre className="text-xs text-red-300 whitespace-pre-wrap">
                  {error || details.authError || details.dbError}
                </pre>
              </div>
            )}
          </div>

          {/* Troubleshooting */}
          {status === 'error' && (
            <div className="bg-slate-700/30 rounded-lg p-4 text-sm text-gray-400">
              <h3 className="font-semibold mb-2">Troubleshooting:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Check .env.local exists in project root</li>
                <li>Verify Supabase URL and anon key are correct</li>
                <li>Restart dev server after changing .env.local</li>
                <li>Ensure database tables are created</li>
                <li>Check Supabase project isn't paused</li>
              </ul>
            </div>
          )}

          {status === 'connected' && (
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                Your Supabase backend is connected and ready!
              </p>
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition"
              >
                Back to Home
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}