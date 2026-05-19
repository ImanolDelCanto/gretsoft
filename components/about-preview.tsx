"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const metrics = [
  { value: "2+", label: "Años desarrollando software" },
  { value: "100%", label: "Proyectos a medida" },
  { value: "24h", label: "Tiempo de respuesta" },
  { value: "1 a 1", label: "Trato directo con el equipo" },
]

export function AboutPreview() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Quiénes somos</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Un equipo que entiende tu problema antes de escribir una línea de código.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              En GretSoft combinamos criterio técnico y cercanía. Trabajamos
              codo a codo con cada cliente para transformar una idea o un
              proceso desordenado en un producto digital sólido, mantenible y
              fácil de usar.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              No tercerizamos: el mismo equipo que te escucha es el que diseña,
              desarrolla y acompaña tu proyecto.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Conocé cómo trabajamos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border"
          >
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="group relative bg-card p-7 transition-colors hover:bg-secondary/60 sm:p-8"
              >
                <span className="absolute right-5 top-5 font-mono text-xs text-muted-foreground/50">
                  0{i + 1}
                </span>
                <p className="font-display text-4xl font-bold text-primary sm:text-5xl">
                  {m.value}
                </p>
                <p className="mt-3 text-sm leading-snug text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
