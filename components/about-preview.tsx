"use client"

import { useMemo, useState, useEffect } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

export function AboutPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px",
      },
    )

    const element = document.getElementById("about-preview-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Set animation complete after delay
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimationComplete(true)
      }, 800) // Wait for card animation to complete

      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const stats = useMemo(
    () => [
      { stat: "100%", label: "Soluciones a Medida" },
      { stat: "Innovación", label: "Como Estándar" },
      { stat: "Colaboración", label: "Con Nuestros Clientes" },
      { stat: "Visión", label: "Para el Futuro" },
    ],
    [],
  )

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section id="about-preview-section" className="relative isolate overflow-hidden w-full">
      {/* Gradient background with containment */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight sm:text-4xl">
              Innovación y Experiencia
              <br />
              <span className="text-purple-600 dark:text-purple-400">en Desarrollo Web</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="mt-6 text-lg leading-8 text-muted-foreground">
              Con más de 2 años de experiencia, en GretSoft nos especializamos en transformar ideas en soluciones
              digitales excepcionales. Nuestro equipo combina creatividad y expertise técnico para crear experiencias
              web que destacan.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-8 flex items-center gap-x-6">
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="pulse-button w-full rounded-full border border-primary/20 px-8 py-3 bg-primary-foreground text-sm font-semibold text-foreground transition-all duration-200 hover:bg-primary/30 hover:tracking-wider active:translate-y-1"
                >
                  Conoce más sobre nosotros
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative">
            {/* Stats card container */}
            <motion.div
              className="relative rounded-xl border bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              onAnimationComplete={() => setAnimationComplete(true)}
            >
              {/* Background gradient that only appears after animation completes */}
              {animationComplete && (
                <div className="absolute -top-64 -right-64 opacity-50 blur-3xl max-w-full" aria-hidden="true">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.2, 0.3, 0.2],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      scale: {
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      },
                    }}
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>
              )}

              <div className="p-8 relative z-10 bg-background/80">
                <motion.dl
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delayChildren: 0.6 }}
                >
                  {stats.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="border-l-4 border-purple-500 pl-4"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.4,
                            delay: index * 0.1,
                          },
                        },
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <dt className="text-sm font-medium text-muted-foreground">{item.label}</dt>
                      <dd className="mt-1 text-3xl font-semibold tracking-tight text-purple-600 dark:text-purple-400">
                        {item.stat}
                      </dd>
                    </motion.div>
                  ))}
                </motion.dl>
              </div>
            </motion.div>

            {/* Separate background gradient for the entire right column */}
            <div className="absolute -z-10 inset-0 opacity-30 blur-3xl" aria-hidden="true">
              <div className="aspect-[577/310] w-full h-full bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-900/20 dark:to-blue-900/20 opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

