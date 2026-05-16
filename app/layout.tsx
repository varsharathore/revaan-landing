import type { Metadata } from 'next'
import { Bebas_Neue, Dancing_Script, DM_Sans } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'
import { CustomCursor } from '@/components/CustomCursor'

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
  display: 'swap',
})

const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  variable: '--font-dancing',
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
      className={`${bebasNeue.variable} ${dancingScript.variable} ${dmSans.variable}`}
    >
      <body>
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
