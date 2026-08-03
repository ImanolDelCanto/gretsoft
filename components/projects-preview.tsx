"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "EA Importados",
    type: "E-commerce",
    image: "/media/eaimportados.webp",
    url: "https://importadosea.com/",
  },
  {
    title: "Nitrec",
    type: "E-commerce",
    image: "/media/nitrec.webp",
    url: "https://nitrec.com.ar",
  },
  {
    title: "Shanti Hogar",
    type: "E-commerce",
    image: "/media/shanti.webp",
    url: "https://www.shantihogar.com/",
  },
  {
    title: "Experiencias Aéreas",
    type: "Landing Page",
    image: "/media/experienciasaereas.webp",
    url: "https://www.experienciasaereas.com.ar/",
  },
]

export function ProjectsPreview() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Trabajos</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Proyectos que ya están funcionando.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Ver todos los trabajos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (i % 2) * 0.1,
                }}
                className="surface group h-full overflow-hidden rounded-2xl transition-all duration-300 hover:border-primary/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                      {project.type}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            )

            return project.url ? (
              <Link
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {card}
              </Link>
            ) : (
              <div key={project.title}>{card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
