"use client"

import { useMemo, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Shield, Clock, Zap, Users } from "lucide-react"

export function SupportServices() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Garantizar que la hidratación esté completa antes de animaciones
  useEffect(() => {
    setMounted(true)
  }, [])

  // Observador de intersección optimizado
  useEffect(() => {
    if (!mounted) return

    const options = {
      threshold: 0.1,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Desconectar el observer una vez visible para ahorrar recursos
        observer.disconnect()
      }
    }, options)

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

  // Variantes de animación para el encabezado
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.7,
      },
    },
  }

  // Variantes para el contenedor de características
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  }

  // Variantes para cada característica individual
  const featureVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: i * 0.1,
        duration: 0.7,
      },
    }),
  }

  return (
    <section id="support-services-section" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {mounted && (
          <motion.div
            className="mx-auto max-w-2xl lg:text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={headerVariants}
          >
            <h2 className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-700/30">
              Soporte Continuo
            </h2>
            <p className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              No te dejamos solo después del lanzamiento
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Nuestro compromiso va más allá del desarrollo inicial. Te ofrecemos soporte continuo para garantizar el
              éxito a largo plazo de tu presencia digital.
            </p>
          </motion.div>
        )}

        {mounted && (
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            style={{ willChange: "transform, opacity" }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  custom={index}
                  variants={featureVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  className="group relative rounded-xl bg-background/60 backdrop-blur-sm p-6 shadow-md transition-all duration-300 border border-border/50"
                >
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-indigo-600 transition-colors duration-300">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </motion.div>
                    </div>
                    <div className="ml-16">{feature.name}</div>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground ml-16">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        )}

        {mounted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.9, type: "spring", stiffness: 300, damping: 20 }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              className="relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 p-px shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-xl bg-background/95 backdrop-blur-sm px-6 py-8 sm:px-8 sm:py-10 text-center">
                <h3 className="text-xl font-semibold">¿Necesitas soporte para tu sitio web actual?</h3>
                <p className="mt-2 text-muted-foreground">
                  También ofrecemos servicios de mantenimiento y soporte para sitios web existentes.
                </p>
                <div className="mt-6">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Solicitar soporte
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

