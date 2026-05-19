"use client"

import { motion } from "framer-motion"
import { Search, FileText, Code2, Rocket, ShieldCheck } from "lucide-react"

const steps = [
  {
    title: "Consultoría",
    description:
      "Te escuchamos. Entendemos tu negocio, tu problema y tu objetivo antes de proponer una solución.",
    icon: Search,
  },
  {
    title: "Propuesta clara",
    description:
      "Definimos alcance, tiempos y presupuesto por escrito. Sin sorpresas ni letra chica.",
    icon: FileText,
  },
  {
    title: "Diseño & desarrollo",
    description:
      "Construimos tu solución con avances visibles y comunicación constante en cada etapa.",
    icon: Code2,
  },
  {
    title: "Lanzamiento & soporte",
    description:
      "Publicamos, te capacitamos para usarlo y seguimos disponibles cuando nos necesites.",
    icon: Rocket,
  },
]

export function Process() {
  return (
    <section id="proceso" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Un proceso ordenado, de la idea a producción.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Sabemos lo que hacemos — y te lo mostramos en cada paso. Así trabajamos
            cada proyecto.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              className="surface relative rounded-2xl p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-primary">
                  0{i + 1}
                </span>
                <step.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-border lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="surface mt-6 flex flex-col items-start gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                No te dejamos solo después del lanzamiento
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Mantenimiento, actualizaciones y soporte continuo — también para
                proyectos que ya están en marcha.
              </p>
            </div>
          </div>
          <a href="#contacto" className="btn-ghost flex-shrink-0">
            Solicitar soporte
          </a>
        </motion.div>
      </div>
    </section>
  )
}
