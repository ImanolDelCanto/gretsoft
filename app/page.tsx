import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/hero"
import { AboutPreview } from "@/components/about-preview"
import { Services } from "@/components/services"
import { ServicePackages } from "@/components/service-packages"
import { Process } from "@/components/process"
import { ProjectsPreview } from "@/components/projects-preview"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <AboutPreview />
        <Services />
        <ServicePackages />
        <Process />
        <ProjectsPreview />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
