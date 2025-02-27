import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "GretSoft | Soluciones Web Profesionales",
  description: "Desarrollo de landing pages, e-commerce y soluciones web personalizadas",
  keywords: "desarrollo web, landing pages, e-commerce, aplicaciones web, SEO, diseño web, Buenos Aires",
  authors: [{ name: "GretSoft" }],
  creator: "GretSoft",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6d28d9",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Cargando...</div>}>
          {children}
          <WhatsAppButton />
        </Suspense>
      </body>
    </html>
  )
}

