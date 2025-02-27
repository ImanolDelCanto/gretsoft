"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { About } from "@/components/about"
import { AboutTimeline } from "@/components/about-timeline"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

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

export default function AboutPage() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 animate-gradient-x" />

          {/* Animated shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
              <div className="aspect-square h-96 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-blob" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20">
              <div className="aspect-square h-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-blob animation-delay-2000" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20">
              <div className="aspect-square h-96 rounded-full bg-gradient-to-br from-pink-500 to-yellow-500 animate-blob animation-delay-4000" />
            </div>
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
                <motion.p
                  variants={fadeInUp}
                  className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400"
                >
                  Conoce Nuestra Historia
                </motion.p>
                <motion.h1
                  variants={fadeInUp}
                  className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
                >
                  Impulsando el Éxito Digital
                </motion.h1>
                <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl">
                  En GretSoft, fusionamos creatividad y tecnología de vanguardia para crear soluciones web que no solo
                  transforman negocios, sino que redefinen expectativas en el mundo digital.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <About />
        <AboutTimeline />
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
              className="rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowDown className="h-5 w-5 transform rotate-180" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

