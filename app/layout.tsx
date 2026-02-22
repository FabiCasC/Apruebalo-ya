import React from "react"
import type { Metadata } from 'next'
import { Inter, Caveat } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'ApruébaLo YA! - Tu plataforma de éxito académico',
  description: 'Acceso a miles de recursos universitarios: cursos, asesoría de tesis, simuladores y más',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
