import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Suspense } from "react"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "GretSoft | Desarrollo Web Profesional en Buenos Aires",
  description:
    "Empresa de desarrollo web en Buenos Aires. Creamos landing pages, e-commerce, sitios web corporativos y aplicaciones web personalizadas para hacer crecer tu negocio.",
  keywords:
    "paginas web, desarrollo web, landing pages, e-commerce, aplicaciones web, SEO, diseño web, Buenos Aires, GretSoft, páginas web, sistemas web, servicios web, desarrollo de software",
  authors: [{ name: "GretSoft" }],
  creator: "GretSoft",
  viewport: {
    width: "device-width",
    initialScale: 1,
    themeColor: "#00E5C9",
  },
  metadataBase: new URL("https://gretsoft.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GretSoft | Desarrollo Web Profesional en Buenos Aires",
    description:
      "Empresa de desarrollo web en Buenos Aires. Creamos landing pages, e-commerce, sitios web corporativos y aplicaciones web personalizadas para hacer crecer tu negocio.",
    url: "https://gretsoft.com.ar",
    siteName: "GretSoft",
    images: [
      {
        url: "/gretsoft2.webp",
        width: 1200,
        height: 630,
        alt: "GretSoft - Soluciones Web Profesionales",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GretSoft | Desarrollo Web Profesional en Buenos Aires",
    description:
      "Empresa de desarrollo web en Buenos Aires. Creamos landing pages, e-commerce, sitios web corporativos y aplicaciones web personalizadas para hacer crecer tu negocio.",
    images: ["/gretsoft2.webp"],
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
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
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

        {/* Structured Data (JSON-LD) */}
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
                "Empresa de desarrollo web en Buenos Aires. Creamos landing pages, e-commerce, sitios web corporativos y aplicaciones web personalizadas.",
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
                "https://www.facebook.com/gretsoft",
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
              serviceType: "Desarrollo Web",
              provider: {
                "@type": "Organization",
                name: "GretSoft",
              },
              areaServed: {
                "@type": "Country",
                name: "Argentina",
              },
              description:
                "Desarrollo de landing pages, e-commerce, sitios web corporativos y aplicaciones web personalizadas.",
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

