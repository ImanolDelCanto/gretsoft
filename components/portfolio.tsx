"use client"

import * as React from "react"
import { useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState("all")

  const projects = useMemo(
    () => [
      {
        title: "E-commerce Shanti",
        description: "E-commerce integrado con Mercado Pago para realizar pagos seguros, con un panel de administrador para manejar el mismo. Entregado con un documento de uso.",
        image: "/media/shanti.webp",
        url: "https://www.shantihogar.com/",
        category: "e-commerce",
      },
      {
        title: "Landing Page Experiencias Aéreas ",
        description: "Página de aterrizaje para promoción de experiencias Aéreas",
        image: "/media/experienciasaereas.webp",
        url: "https://www.experienciasaereas.com.ar/",
        category: "landing",
      },
      {
        title: "Página web Aberturas",
        description: "Página para promoción de articulos que incluye catálogo y posibilidad de contacto.",
        image: "/media/alumbar.webp",
        url: "https://www.alumbaronline.com/",
        category: "landing",
      },
      {
        title: "Aplicacion web para gestionar stock y visualizar ventas",
        description:
          "Aplicacion conectada a una base de datos para llevar el control sobre productos. (No se puede acceder, si quiere ver mas contactenos)",
        image: "/media/sistem1-_1__1.webp",
        url: "",
        category: "app",
      },
    ],
    [],
  )

  const categories = useMemo(
    () => [
      { id: "all", label: "Todos" },
      { id: "e-commerce", label: "E-commerce" },
      { id: "landing", label: "Landing Pages" },
      { id: "corporate", label: "Sitios Corporativos" },
      { id: "app", label: "Aplicaciones" },
    ],
    [],
  )

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeCategory === "all" || project.category === activeCategory),
    [projects, activeCategory],
  )

  return (
    <section id="portfolio" className="relative py-14 sm:py-18 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />

        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,var(--primary-rgb,0,229,201)_0.1,transparent_80%)] dark:opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_80%_500px,var(--purple-rgb,147,51,234)_0.1,transparent_80%)] dark:opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_20%_800px,var(--primary-rgb,0,229,201)_0.1,transparent_80%)] dark:opacity-40" />
        </div>

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px)] bg-[size:40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 h-20"
          >
            Nuestros Proyectos Destacados
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Explora nuestra galería de innovaciones digitales y descubre cómo transformamos visiones en realidades
            impactantes.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="mb-2"
              >
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
              >
                <Card className="group relative flex flex-col overflow-hidden bg-background/40 backdrop-blur-sm border-none">
                  <CardContent className="p-0">
                    <div className="relative h-40 sm:h-48 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-6 
                                   sm:opacity-0 sm:group-hover:opacity-100 opacity-100" // Siempre visible en mobile
                      >
                        {project.url && (
                          <Link href={project.url} target="_blank">
                            <Button
                              variant="secondary"
                              className="transform sm:translate-y-4 sm:opacity-0 transition-all duration-300 
                                         sm:group-hover:translate-y-0 sm:group-hover:opacity-100
                                         translate-y-0 opacity-100" // Siempre visible en mobile
                            >
                              Ver Proyecto
                            </Button>
                          </Link>
                        )}
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-2 text-sm sm:text-base text-muted-foreground"
                      >
                        {project.description}
                      </motion.p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

