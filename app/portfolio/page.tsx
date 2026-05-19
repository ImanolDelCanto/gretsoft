import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Portfolio } from "@/components/portfolio"

export const metadata: Metadata = {
  title: "Trabajos | GretSoft",
  description:
    "Proyectos de software desarrollados por GretSoft: aplicaciones web, sistemas de gestión, e-commerce y sitios web.",
  alternates: { canonical: "/portfolio" },
}

const stats = [
  { value: "100%", label: "Proyectos a medida" },
  { value: "E-commerce", label: "Pagos integrados" },
  { value: "Apps web", label: "Sistemas en tiempo real" },
  { value: "Soporte", label: "Acompañamiento real" },
]

export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
          <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 glow-radial" />
          <div className="container-x">
            <div className="max-w-3xl animate-fade-up">
              <span className="eyebrow">Trabajos</span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Ideas convertidas en{" "}
                <span className="text-accent-gradient">software real</span>.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Una selección de proyectos que desarrollamos y que hoy están en
                producción, ayudando a negocios reales a trabajar mejor.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card p-7">
                  <p className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Portfolio />
      </main>
      <SiteFooter />
    </div>
  )
}
