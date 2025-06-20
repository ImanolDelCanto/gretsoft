"use client"

import { useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export function AboutPreview() {
  const stats = useMemo(
    () => [
      { stat: "100%", label: "Soluciones a Medida" },
      { stat: "Innovación", label: "Como Estándar" },
      { stat: "Colaboración", label: "Con Nuestros Clientes" },
      { stat: "Visión", label: "Para el Futuro" },
    ],
    [],
  )

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  }

  const statsItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const gradientVariants = {
    hidden: { opacity: 0.5, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative isolate overflow-hidden w-full">
      {/* Animated gradient background */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={gradientVariants}
        className="absolute inset-0 w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight sm:text-4xl">
              Experiencia y compromiso
              <br />
              <span className="text-purple-600 dark:text-purple-400">en Desarrollo Web</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-muted-foreground">
              Con más de dos años de experiencia, en GretSoft nos especializamos en crear soluciones tecnológicas 
              personalizadas. Desarrollamos desde aplicaciones web hasta sistemas empresariales complejos, 
              siempre enfocados en la calidad y los resultados.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex items-center gap-x-6">
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pulse-button w-full rounded-full border border-primary/20 px-8 py-3 bg-primary-foreground text-sm font-semibold text-foreground transition-all duration-200 hover:bg-primary/30 hover:tracking-wider"
                >
                  Conoce más sobre nosotros
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative"
          >
            {/* Animated gradient blob */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.5,
                transition: { duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
              }}
              className="absolute -top-64 -right-64 blur-3xl max-w-full"
              aria-hidden="true"
            >
              <div
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative rounded-xl border bg-background/50 backdrop-blur-sm shadow-2xl"
            >
              <div className="p-8">
                <motion.dl variants={statsContainerVariants} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {stats.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={statsItemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="border-l-4 border-purple-500 pl-4"
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

