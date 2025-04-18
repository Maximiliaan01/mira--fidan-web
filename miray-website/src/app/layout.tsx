import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ContentProvider } from '@/components/ContentProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Miray Fidan',
  description: 'Miray Fidan Kişisel Web Sitesi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <ContentProvider>
          {children}
        </ContentProvider>
      </body>
    </html>
  )
} 