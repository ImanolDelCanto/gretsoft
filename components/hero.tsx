"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Code, Sparkles, Zap } from "lucide-react"
import { AnimatedButton } from "./ui/animated-button"
import { useMobile } from "@/hooks/use-mobile"

const features = [
  { icon: Code, text: "Desarrollo a medida" },
  { icon: Zap, text: "Optimización de rendimiento" },
  { icon: Sparkles, text: "Diseño moderno" },
]

export function Hero() {
  const isMobile = useMobile()

  // Variantes de animación optimizadas para móvil
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.15,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: isMobile ? -30 : -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: isMobile ? 200 : 300,
        damping: isMobile ? 15 : 20,
        duration: isMobile ? 0.5 : 0.7,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: isMobile ? 200 : 300,
        damping: isMobile ? 15 : 20,
        duration: isMobile ? 0.5 : 0.7,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: isMobile ? 200 : 300,
        damping: isMobile ? 15 : 20,
        delay: 0.5,
        duration: isMobile ? 0.5 : 0.7,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: isMobile ? 200 : 300,
        damping: isMobile ? 15 : 20,
        delay: 0.7 + i * (isMobile ? 0.08 : 0.1),
        duration: isMobile ? 0.4 : 0.5,
      },
    }),
  }

  return (
    <div id="home" className="relative isolate overflow-hidden min-h-screen flex items-center">
      {/* Elementos de fondo animados con efectos de blur */}
      <div className="absolute inset-0 -z-10 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full aspect-square bg-primary/30 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 left-1/4 w-full aspect-square bg-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-x-3 mb-8">
            <div className="gradient-border">
              <div className="rounded-full flex items-center gap-x-2 px-3 py-1 text-sm font-medium">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: isMobile ? 30 : 20, // Más lento en móvil para mejor rendimiento
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                </motion.div>
                <span className="text-glow">Soluciones Web Profesionales</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={titleVariants}
            className="max-w-lg text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Transformamos ideas en{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 0%" }}
              animate={{ backgroundPosition: "100% 0%" }}
              transition={{
                duration: isMobile ? 8 : 5, // Más lento en móvil para mejor rendimiento
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 text-glow"
            >
              experiencias digitales
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-muted-foreground">
            Desarrollamos soluciones web profesionales y personalizadas para hacer crecer tu negocio. Desde landing
            pages hasta e-commerce, creamos experiencias digitales que destacan.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
            <AnimatedButton text="Comienza tu proyecto" href="#contact" className="w-full sm:w-auto" />
            <Link href="/portfolio" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  scale: isMobile ? 1.03 : 1.05,
                  letterSpacing: isMobile ? "0.05em" : "0.1em",
                  backgroundColor: "rgba(0, 229, 201, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: isMobile ? 300 : 400, damping: isMobile ? 8 : 10 }}
                className="pulse-button w-full rounded-full border border-primary/20 px-8 py-3 bg-primary-foreground text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary/30 hover:tracking-wider active:translate-y-1"
              >
                Ver nuestro trabajo
              </motion.button>
            </Link>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureVariants}
                whileHover={{
                  scale: isMobile ? 1.03 : 1.05,
                  boxShadow: "0 0 25px rgba(0, 229, 201, 0.5)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                className="flex items-center gap-x-2 text-sm glass-card p-3 rounded-lg hover-glow"
              >
                <motion.div
                  className="rounded-full bg-primary/10 p-1"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: isMobile ? 0.8 : 0.6 }}
                >
                  <item.icon className="h-4 w-4 text-primary" />
                </motion.div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: isMobile ? 10 : 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
            }}
            className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl rounded-full"
          />

          <motion.div
            whileHover={{ scale: isMobile ? 1.03 : 1.05 }}
            transition={{ type: "spring", stiffness: isMobile ? 200 : 300, damping: isMobile ? 10 : 15 }}
          >
            <Image
              src="/banner (2).jpg"
              alt="Dashboard preview"
              width={600}
              height={600}
              className="mx-auto w-full max-w-[22.875rem] sm:max-w-[28.875rem] rounded-xl shadow-2xl ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.02] hover-glow"
              priority
              loading="eager"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

