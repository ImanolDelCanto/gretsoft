"use client"

import { motion } from "framer-motion"
import {
  AppWindow,
  Database,
  ShoppingCart,
  Globe,
  Plug,
  Sparkles,
} from "lucide-react"

const services = [
  {
    title: "Software a medida",
    description:
      "Desarrollamos la solución exacta para tu operación: sin plantillas, sin funciones que no usás. Construido alrededor de tu proceso real.",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Aplicaciones web",
    description:
      "Apps rápidas, seguras y escalables — desde paneles internos hasta plataformas completas de cara al cliente.",
    icon: AppWindow,
  },
  {
    title: "Sistemas de gestión",
    description:
      "Stock, ventas, clientes y reportes en tiempo real. Ordenamos tu negocio en una sola herramienta.",
    icon: Database,
  },
  {
    title: "E-commerce",
    description:
      "Tiendas online con pagos integrados (Mercado Pago) y panel de administración para gestionar todo vos mismo.",
    icon: ShoppingCart,
  },
  {
    title: "Sitios web & Landing pages",
    description:
      "Presencia digital profesional, veloz y optimizada para SEO. Pensada para convertir visitas en clientes.",
    icon: Globe,
  },
  {
    title: "Integraciones & APIs",
    description:
      "Conectamos tus sistemas, automatizamos tareas y eliminamos la carga manual entre las herramientas que ya usás.",
    icon: Plug,
  },
]

export function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Soluciones digitales, de punta a punta.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Cubrimos todo el ciclo: diseño, desarrollo, lanzamiento y soporte.
            Elegí el tipo de proyecto y nos encargamos del resto.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 3) * 0.08,
              }}
              className="group relative bg-card p-8 transition-colors duration-300 hover:bg-secondary/50"
            >
              <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground/40">
                0{i + 1}
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary transition-colors duration-300 group-hover:border-primary/50">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <span className="mt-6 block h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
