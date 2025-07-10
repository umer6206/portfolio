import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Umer - Full Stack Developer',
  description: 'Proficient Full Stack Developer with 2 years of experience in Node.js, React.js, Next.js, Express.js, MongoDB, SQL, and Web3.0 integration.',
  keywords: 'Full Stack Developer, React, Node.js, Next.js, JavaScript, TypeScript, Web3',
  author: 'Muhammad Umer',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollIndicator />
          <AnimatedBackground />
          <Header />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

