import type React from "react"
import type { Metadata, Viewport } from "next"
import "@/styles/globals.css"
import localFont from "next/font/local"
import { Sora } from "next/font/google"
import { cn } from "@/lib/utils"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700", "800"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04070d",
}

export const metadata: Metadata = {
  title: "GretSoft | Desarrollo de Software a Medida",
  description:
    "Estudio de desarrollo de software. Construimos aplicaciones web, sistemas de gestión, plataformas e-commerce e integraciones a medida para empresas que quieren crecer.",
  keywords:
    "desarrollo de software, software a medida, aplicaciones web, sistemas de gestión, e-commerce, integraciones API, desarrollo web, landing pages, GretSoft, Buenos Aires, Argentina",
  authors: [{ name: "GretSoft" }],
  creator: "GretSoft",
  metadataBase: new URL("https://gretsoft.com.ar"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "GretSoft | Desarrollo de Software a Medida",
    description:
      "Estudio de desarrollo de software. Aplicaciones web, sistemas de gestión, e-commerce e integraciones a medida.",
    url: "https://gretsoft.com.ar",
    siteName: "GretSoft",
    images: [
      {
        url: "/gretsoft.webp",
        width: 1200,
        height: 630,
        alt: "GretSoft - Desarrollo de software a medida",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GretSoft | Desarrollo de Software a Medida",
    description:
      "Estudio de desarrollo de software. Aplicaciones web, sistemas de gestión, e-commerce e integraciones a medida.",
    images: ["/gretsoft.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={cn("scroll-smooth dark", geist.variable, geistMono.variable, sora.variable)}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Ambient backdrop */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-grid opacity-[0.35] mask-fade-y" />
          <div className="absolute -top-40 left-[42%] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute -top-24 left-[64%] h-[440px] w-[560px] -translate-x-1/2 rounded-full bg-accent2/10 blur-[150px]" />
        </div>

        {children}
        <WhatsAppButton />
        <Toaster />

        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GretSoft",
              url: "https://gretsoft.com.ar",
              logo: "https://gretsoft.com.ar/gretsoft1.webp",
              description:
                "Estudio de desarrollo de software. Aplicaciones web, sistemas de gestión, e-commerce e integraciones a medida.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Banfield",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+5411-2676-3301",
                contactType: "customer service",
                email: "gretsoft@gmail.com",
              },
              sameAs: [
                "https://www.instagram.com/gretsoft",
                "https://www.linkedin.com/company/gretsoft",
              ],
            }),
          }}
        />

        <Script
          id="schema-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Desarrollo de software a medida",
              provider: { "@type": "Organization", name: "GretSoft" },
              areaServed: { "@type": "Country", name: "Argentina" },
              description:
                "Desarrollo de aplicaciones web, sistemas de gestión, plataformas e-commerce e integraciones a medida.",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "ARS",
                },
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
