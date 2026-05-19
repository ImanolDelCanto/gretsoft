"use client"

import { motion } from "framer-motion"
import { Heart, Compass, Handshake } from "lucide-react"

const values = [
  {
    title: "Cercanía",
    description:
      "Trabajamos de la mano con cada cliente. El mismo equipo que te escucha es el que desarrolla tu proyecto.",
    icon: Handshake,
  },
  {
    title: "Compromiso",
    description:
      "Para nosotros un proyecto no está terminado hasta que el cliente está completamente conforme.",
    icon: Heart,
  },
  {
    title: "Visión a futuro",
    description:
      "Construimos software mantenible y escalable, en constante evolución junto a las nuevas tecnologías.",
    icon: Compass,
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:sticky lg:top-28"
          >
            <span className="eyebrow">Quiénes somos</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Resolvemos problemas a través de la tecnología.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="space-y-5 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Creemos que cada negocio merece herramientas digitales pensadas
              específicamente para él. Nuestra misión es transformar ideas y
              procesos desordenados en soluciones de software sólidas y fáciles
              de usar.
            </p>
            <p>
              Nos diferencia la cercanía: trabajamos junto a cada cliente,
              asegurándonos de que el resultado final sea exactamente lo que
              necesita. No tercerizamos ni usamos plantillas genéricas.
            </p>
            <p>
              Fundamos GretSoft con una visión clara: crear oportunidades a
              través de la tecnología. Si buscás un equipo que te escuche, te
              acompañe y haga realidad tu proyecto con un servicio
              personalizado, somos para vos.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="bg-card p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
