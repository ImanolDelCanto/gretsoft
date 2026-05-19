"use client"

import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { About } from "@/components/about"
import { AboutTimeline } from "@/components/about-timeline"
import { Users, Target, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Experiencia",
    description: "Más de 2 años desarrollando software para distintos rubros.",
  },
  {
    icon: Target,
    title: "Compromiso",
    description: "Resultados concretos: no cerramos un proyecto hasta que funciona.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Tecnologías actuales y buenas prácticas en cada desarrollo.",
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function AboutPageClient() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
          <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 glow-radial" />
          <div className="container-x">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="max-w-3xl"
            >
              <span className="eyebrow">Nuestra historia</span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Impulsamos el éxito digital de las{" "}
                <span className="text-accent-gradient">empresas</span>.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                En GretSoft fusionamos criterio técnico y cercanía para crear
                software que transforma la forma en que trabajan los negocios.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.1 }}
                  className="bg-card p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <About />
        <AboutTimeline />
      </main>
      <SiteFooter />
    </div>
  )
}
