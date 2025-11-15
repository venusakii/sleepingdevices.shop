import type { Metadata } from 'next'
import { Geist, Crimson_Text } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'Sleeping Devices - Expert Reviews of Sleep Technology',
  description: 'Discover the best sleep devices, trackers, and gadgets. Expert reviews, comparisons, and guides to help you achieve better sleep quality.',
  keywords: 'sleep devices, sleep trackers, white noise machines, sleep technology, smart sleep, sleep gadgets',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} ${_crimsonText.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
