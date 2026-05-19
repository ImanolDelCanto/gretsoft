"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Lock } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  url: string
  category: string
}

const projects: Project[] = [
  {
    id: 5,
    title: "E-commerce Nitrec",
    description:
      "Tienda online de bicicletas fijas, repuestos y servicio de postventa, con catálogo completo y compra en línea.",
    image: "/media/nitrec.webp",
    url: "https://nitrec.com.ar",
    category: "ecommerce",
  },
  {
    id: 1,
    title: "E-commerce Shanti Hogar",
    description:
      "Tienda online integrada con Mercado Pago para pagos seguros, con panel de administración y documento de uso.",
    image: "/media/shanti.webp",
    url: "https://www.shantihogar.com/",
    category: "ecommerce",
  },
  {
    id: 2,
    title: "Landing Experiencias Aéreas",
    description:
      "Página de aterrizaje para la promoción de experiencias aéreas, enfocada en captar contactos.",
    image: "/media/experienciasaereas.webp",
    url: "https://www.experienciasaereas.com.ar/",
    category: "web",
  },
  {
    id: 3,
    title: "Web Alumbar — Aberturas",
    description:
      "Sitio web con catálogo de productos y formulario de contacto para consultas rápidas.",
    image: "/media/alumbar.webp",
    url: "https://www.alumbaronline.com/",
    category: "web",
  },
  {
    id: 4,
    title: "Sistema de gestión de stock",
    description:
      "Aplicación web conectada a base de datos para controlar productos y visualizar ventas en tiempo real.",
    image: "/media/sistem1-_1__1.webp",
    url: "",
    category: "app",
  },
]

const categories = [
  { id: "all", label: "Todos" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "web", label: "Web & Landing" },
  { id: "app", label: "Aplicaciones" },
]

export function Portfolio() {
  const [active, setActive] = useState("all")

  const filtered = useMemo(
    () =>
      projects.filter((p) => active === "all" || p.category === active),
    [active],
  )

  return (
    <section className="section pt-0">
      <div className="container-x">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={
                active === cat.id
                  ? "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
                  : "rounded-full border border-border px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const hasUrl = Boolean(project.url)
              const inner = (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: (i % 2) * 0.08,
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
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary backdrop-blur">
                      {categories.find((c) => c.id === project.category)?.label}
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                        {hasUrl ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <Lock className="h-4 w-4" />
                        )}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    {!hasUrl && (
                      <p className="mt-4 font-mono text-xs text-muted-foreground/70">
                        Proyecto privado — escribinos para una demo.
                      </p>
                    )}
                  </div>
                </motion.article>
              )

              return hasUrl ? (
                <Link
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </Link>
              ) : (
                <div key={project.id}>{inner}</div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
