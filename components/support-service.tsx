"use client"

import { useMemo, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Shield, Clock, Zap, Users } from "lucide-react"

export function SupportServices() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure hydration is complete before animations
  useEffect(() => {
    setMounted(true)
  }, [])

  // Optimized intersection observer
  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, disconnect the observer to save resources
          observer.disconnect()
        }
      },
      {
        threshold: 0.1, // Lower threshold for earlier detection
        rootMargin: "0px", // Simplified margin
      },
    )

    const element = document.getElementById("support-services-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [mounted])

  const features = useMemo(
    () => [
      {
        name: "Soporte Técnico 24/7",
        description: "Asistencia técnica disponible en todo momento para resolver cualquier problema que pueda surgir.",
        icon: Clock,
      },
      {
        name: "Actualizaciones Regulares",
        description:
          "Mantenemos tu sitio web actualizado con las últimas tecnologías y mejores prácticas de seguridad.",
        icon: Zap,
      },
      {
        name: "Seguridad Garantizada",
        description:
          "Implementamos medidas de seguridad robustas para proteger tu sitio web y los datos de tus usuarios.",
        icon: Shield,
      },
      {
        name: "Capacitación Personalizada",
        description: "Te enseñamos a gestionar tu sitio web para que puedas realizar cambios básicos por tu cuenta.",
        icon: Users,
      },
    ],
    [],
  )

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger time
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 }, // Reduced x distance
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100, // Lower stiffness for better performance
        damping: 15,
        mass: 0.8, // Lower mass for faster animation
      },
    },
  }

  return (
    <section id="support-services-section" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {mounted && (
            <>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-700/30"
              >
                Soporte Continuo
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                No te dejamos solo después del lanzamiento
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-lg leading-8 text-muted-foreground"
              >
                Nuestro compromiso va más allá del desarrollo inicial. Te ofrecemos soporte continuo para garantizar el
                éxito a largo plazo de tu presencia digital.
              </motion.p>
            </>
          )}
        </div>

        {mounted && isVisible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            style={{ willChange: "transform, opacity" }} // Performance optimization
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  custom={index}
                  className="group relative rounded-xl bg-background/60 backdrop-blur-sm p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border/50"
                >
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-indigo-600 transition-colors duration-300">
                      <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div className="ml-16">{feature.name}</div>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground ml-16">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        )}

        {mounted && isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 p-px shadow-lg">
              <div className="rounded-xl bg-background/95 backdrop-blur-sm px-6 py-8 sm:px-8 sm:py-10 text-center">
                <h3 className="text-xl font-semibold">¿Necesitas soporte para tu sitio web actual?</h3>
                <p className="mt-2 text-muted-foreground">
                  También ofrecemos servicios de mantenimiento y soporte para sitios web existentes.
                </p>
                <div className="mt-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Solicitar soporte
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

