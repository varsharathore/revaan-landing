import type { Metadata } from 'next'
import { Bebas_Neue, Anton, Yellowtail, DM_Sans } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'
import { CustomCursor } from '@/components/CustomCursor'
import { Preloader } from '@/components/Preloader'

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
  display: 'block',  // block prevents FOUT flash with wrong weight
})

const anton = Anton({
  weight: '400',
  variable: '--font-anton',
  subsets: ['latin'],
  display: 'swap',
})

const yellowtail = Yellowtail({
  weight: '400',
  variable: '--font-yellowtail',
  subsets: ['latin'],
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Revaan — Indian Streetwear',
  description: 'Oversized tees. 280 GSM. Built to rebel.',
  openGraph: {
    title: 'Revaan — Indian Streetwear',
    description: 'Oversized tees. 280 GSM. Built to rebel.',
    siteName: 'Revaan',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${anton.variable} ${yellowtail.variable} ${dmSans.variable}`}
    >
      <head>
        {/* Preload scene images so no blank frames during scroll sequence */}
        <link rel="preload" as="image" href="/images/citybeats-1.jpg" />
        <link rel="preload" as="image" href="/images/pulpy-1.jpg" />
        <link rel="preload" as="image" href="/images/wavy-1.jpg" />
        <link rel="preload" as="image" href="/images/rebel-1.png" />
        <link rel="preload" as="image" href="/images/rebel-2.png" />
        <link rel="preload" as="image" href="/images/liar-1.jpg" />
      </head>
      <body>
        <LenisProvider>
          <Preloader />
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
