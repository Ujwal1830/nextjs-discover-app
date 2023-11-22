import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { Nunito  } from 'next/font/google'
 
const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Discover',
  description: 'Discover app using Next Js & Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  )
}
