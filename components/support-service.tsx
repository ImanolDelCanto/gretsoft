"use client"

import { useMemo, useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Shield, Clock, Zap, Users } from "lucide-react"

export function SupportServices() {
  const [isVisible, setIsVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1, // Lower threshold for mobile
        rootMargin: "-50px 0px", // Less strict margin
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
  }, [])

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05, // Faster stagger for mobile
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 }, // Smaller x offset for mobile
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3, // Slightly faster for mobile
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  return (
    <section id="support-services-section" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
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
        </div>

        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-8 sm:gap-y-10 lg:max-w-none md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                variants={shouldReduceMotion ? {} : itemVariants}
                custom={index}
                className="group relative rounded-xl bg-background/60 backdrop-blur-sm p-5 sm:p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border/50"
                style={{
                  willChange: shouldReduceMotion ? "auto" : "transform",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16 flex justify-center"
          style={{
            willChange: shouldReduceMotion ? "auto" : "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
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
      </div>
    </section>
  )
}

