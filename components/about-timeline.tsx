"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    year: "2023",
    badge: "Fundación",
    title: "Los inicios",
    description:
      "Nace GretSoft con la visión de transformar ideas en soluciones digitales a medida.",
  },
  {
    year: "2024",
    badge: "Desarrollo",
    title: "Primeros proyectos",
    description:
      "Desarrollamos nuestras primeras aplicaciones y sistemas, consolidando una metodología de trabajo y procesos de calidad.",
  },
  {
    year: "2025",
    badge: "Presente",
    title: "Liderando el cambio",
    description:
      "Expandimos nuestros servicios hacia sistemas más complejos, integraciones e IA, siempre con foco en resultados.",
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function AboutTimeline() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Trayectoria</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Un camino de innovación continua.
          </h2>
        </div>

        <div className="mt-14 border-l border-border pl-8 sm:pl-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background sm:-left-[3.8rem]">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>

              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-primary">
                  {item.year}
                </span>
                <span className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {item.badge}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
