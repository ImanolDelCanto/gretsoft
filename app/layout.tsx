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
  themeColor: "#00E5C9",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary",
          inter.className,
        )}
      >
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin"></div>
                <div className="absolute inset-4 border-t-2 border-primary/50 rounded-full animate-spin-slow"></div>
              </div>
            </div>
          }
        >
          {children}
          <WhatsAppButton />
        </Suspense>
      </body>
    </html>
  )
}

