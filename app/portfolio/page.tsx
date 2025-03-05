"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Portfolio } from "@/components/portfolio"
import { WebsiteMockups } from "@/components/website-mockup"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code2, Users, Star, Award } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const stats = [
  { name: "Soluciones a Medida", value: "100%", icon: Code2 },
  { name: "Cercanía con el Cliente", value: "Siempre", icon: Users },
  { name: "Proyectos en Crecimiento", value: "Cada Día", icon: Star },
  { name: "Visión a Futuro", value: "Innovación Constante", icon: Award },
]

export default function PortfolioPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleScroll = useCallback(() => {
    setShowScrollButton(window.scrollY > 100)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative overflow-hidden">
          {/* Dynamic gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
            <div className="absolute top-0 right-1/4 w-full aspect-square bg-primary/30 rounded-full blur-[120px] opacity-50 animate-pulse" />
            <div className="absolute bottom-0 left-1/2 w-full aspect-square bg-purple-500/20 rounded-full blur-[120px] opacity-30 animate-pulse animation-delay-2000" />
          </div>

          <div className="relative">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={staggerChildren}
              className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
            >
              <motion.div variants={fadeInUp} className="mx-auto max-w-2xl lg:mx-0">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium gradient-border"
                >
                  <div className="rounded-full px-3 py-1 text-sm font-medium">
                    <span className="text-primary text-glow">Nuestros Proyectos</span>
                  </div>
                </motion.div>
                <motion.h1
                  variants={fadeInUp}
                  className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 pb-4"
                >
                  Transformando Ideas en Realidad Digital
                </motion.h1>
                <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl">
                  Explora nuestra colección de proyectos innovadores y descubre cómo llevamos a las empresas al
                  siguiente nivel en el mundo digital.
                </motion.p>
              </motion.div>

              <motion.div
                variants={staggerChildren}
                className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.name}
                    variants={fadeInUp}
                    className="glass-card p-8 rounded-2xl hover-glow transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-lg blur opacity-25" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">{stat.value}</h3>
                    <p className="mt-2 text-muted-foreground">{stat.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
        <Portfolio />
        {/* Add the new WebsiteMockups component here */}
        <WebsiteMockups />
      </main>
      <SiteFooter />
      <AnimatePresence>
        {showScrollButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              aria-label="Volver arriba"
              className="rounded-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowDown className="h-5 w-5 transform rotate-180" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

