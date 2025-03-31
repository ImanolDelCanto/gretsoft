"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Code, Sparkles, Zap } from "lucide-react"
import { AnimatedButton } from "./ui/animated-button"
import { useEffect, useState } from "react"

// Custom hook to detect mobile devices
function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

const features = [
  { icon: Code, text: "Desarrollo a medida" },
  { icon: Zap, text: "Optimización de rendimiento" },
  { icon: Sparkles, text: "Diseño moderno" },
]


export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const isMobile = useMobileDetect()

  // Adjust animation settings based on device
  const animationSettings = {
    duration: isMobile ? 0.2 : 0.3,
    stagger: isMobile ? 0.04 : 0.08,
    delay: isMobile ? 0.02 : 0.05,
  }

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 5 }, // Even smaller y distance for mobile
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25, // Faster animation for mobile
        ease: "easeOut",
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.03, // Smaller delay for mobile
        staggerChildren: shouldReduceMotion ? 0 : 0.05, // Faster stagger for mobile
      },
    },
  }

  return (
    <div id="home" className="relative isolate overflow-hidden min-h-screen flex items-center">
      {/* Simplified background elements with CSS-based responsive blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        {/* Using CSS media queries for responsive blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-full aspect-square bg-primary/30 rounded-full blur-[60px] sm:blur-[120px] opacity-50 will-change-auto" />
        <div className="absolute bottom-0 left-1/4 w-full max-w-full aspect-square bg-purple-500/20 rounded-full blur-[60px] sm:blur-[120px] opacity-30 will-change-auto" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-x-3 mb-8">
            <div className="gradient-border">
              <div className="rounded-full flex items-center gap-x-2 px-3 py-1 text-sm font-medium">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-glow">Soluciones Web Profesionales</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 variants={fadeIn} className="max-w-lg text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Transformamos ideas en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 text-glow">
              experiencias digitales
            </span>
          </motion.h1>

          <motion.p variants={fadeIn} className="mt-6 text-lg leading-8 text-muted-foreground">
            Desarrollamos soluciones web profesionales y personalizadas para hacer crecer tu negocio. Desde landing
            pages hasta e-commerce, creamos experiencias digitales que destacan.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
            <AnimatedButton text="Comienza tu proyecto" href="#contact" className="w-full sm:w-auto" />
            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="pulse-button w-full rounded-full border border-primary/20 px-8 py-3 bg-primary-foreground text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary/30 hover:tracking-wider active:translate-y-1">
                Ver nuestro trabajo
              </button>
            </Link>
          </motion.div>

          <motion.div variants={staggerContainer} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-center gap-x-2 text-sm glass-card p-3 rounded-lg hover-glow"
              >
                <div className="rounded-full bg-primary/10 p-1">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: isMobile ? 0.95 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: animationSettings.duration,
            ease: "easeOut",
            delay: animationSettings.delay,
          }}
          className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative"
        >
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-xl sm:blur-3xl opacity-30 rounded-full will-change-auto" />
          <Image
            src="/banner (2).jpg"
            alt="Dashboard preview"
            width={600}
            height={600}
            className="mx-auto w-full max-w-[18rem] xs:max-w-[22.875rem] sm:max-w-[28.875rem] rounded-xl shadow-2xl ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.02] hover-glow"
            priority
            loading="eager"
            sizes="(max-width: 480px) 90vw, (max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
            style={{
              willChange: shouldReduceMotion ? "auto" : "transform", // Only use willChange when needed
              transform: "translateZ(0)", // Force GPU acceleration
              backfaceVisibility: "hidden", // Prevent flickering on some mobile browsers
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

