import type { Metadata } from 'next'
import { Inter, Playfair_Display, Lilita_One } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Sidebar } from '@/components/navigation/Sidebar'
import { Navbar } from '@/components/navigation/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const lilitaOne = Lilita_One({ weight: '400', subsets: ['latin'], variable: '--font-brand' })

export const metadata: Metadata = {
  title: 'THE SOCIAL ANIMAL',
  description: 'Analyze influencer campaigns with THE SOCIAL ANIMAL AI-powered insights',
  generator: 'v0.app',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${lilitaOne.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 pt-16">
              <Sidebar />
              <main className="flex-1 transition-all duration-300 ease-in-out w-full overflow-x-hidden">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
