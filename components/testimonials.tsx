"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

type Testimonial = {
  name: string
  role: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Shanti Hogar",
    role: "E-commerce",
    quote:
      "Necesitábamos digitalizar nuestras ventas rápido. GretSoft nos entregó un e-commerce profesional con pagos integrados y un flujo de compra simple.",
  },
  {
    name: "Experiencias Aéreas",
    role: "Landing Page",
    quote:
      "La landing capta la atención al instante y mejora el contacto con clientes. Se nota el enfoque en conversión y performance.",
  },
  {
    name: "Alumbar Online",
    role: "Web + Catálogo",
    quote:
      "La web incluye catálogo y formulario de contacto. Ahora los clientes exploran todo online y nos consultan mucho más rápido.",
  },
  {
    name: "Gestión Empresarial",
    role: "Aplicación Web",
    quote:
      "Implementamos una app web para inventario y ventas en tiempo real. Bajamos tiempos operativos y ganamos visibilidad del negocio.",
  },
]

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("")
}

export function Testimonials() {
  return (
    <section id="testimonios" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Testimonios</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Lo que dicen quienes ya trabajaron con nosotros.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 2) * 0.1,
              }}
              className="surface surface-hover relative flex flex-col rounded-2xl p-8"
            >
              <Quote className="h-8 w-8 text-primary/30" />

              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>

              <div className="mt-4 flex gap-1" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary font-mono text-sm font-semibold text-primary">
                  {initials(t.name)}
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
