import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ServicePackages } from "@/components/service-packages"
import { Contact } from "@/components/contact"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutPreview } from "@/components/about-preview"
import { SupportServices } from "@/components/support-service"
import { FAQ } from "@/components/faq"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Cargando...</div>}>
          <Hero />
          <AboutPreview />
          <Services />
          <ServicePackages />
          <SupportServices />
          <Contact />
          <FAQ />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}

