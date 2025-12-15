import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Versio.ai - Version Control for AI Prompts',
  description: 'Track, test, and manage your AI prompts with version control',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}