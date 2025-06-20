"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { Code, Sparkles, Zap } from "lucide-react"
import { AnimatedButton } from "./ui/animated-button"
import { useEffect, useState, useRef, useCallback } from "react"
import { gsap } from "gsap"

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

// Componente de animación mejorado con diseño completamente responsive
function EnhancedCodeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isAnimationActive, setIsAnimationActive] = useState(false)
  const [currentTime, setCurrentTime] = useState<string>("")
  const [hasStarted, setHasStarted] = useState(false)
  const isMobile = useMobileDetect()

  // Referencias para limpiar timeouts
  const typingTimeoutRef = useRef<NodeJS.Timeout>()
  const lineTimeoutRef = useRef<NodeJS.Timeout>()

  // Código adaptado para móviles (líneas más cortas)
  const codeSteps = [
    {
      content: isMobile ? "// Bienvenido a Gretsoft" : "// Bienvenido a Gretsoft",
      type: "comment",
      delay: isMobile ? 600 : 900,
    },
    {
      content: "const tuNegocio = {",
      type: "declaration",
      delay: isMobile ? 500 : 700,
    },
    {
      content: isMobile ? "  problema: 'Digitalizar empresa'," : "  problema: 'Necesito digitalizar mi empresa',",
      type: "property",
      delay: isMobile ? 400 : 600,
    },
    {
      content: isMobile ? "  objetivo: 'Más ventas'," : "  objetivo: 'Aumentar ventas y eficiencia',",
      type: "property",
      delay: isMobile ? 450 : 650,
    },
    {
      content: isMobile ? "  presupuesto: 'Flexible'," : "  presupuesto: 'Flexible y escalable',",
      type: "property",
      delay: isMobile ? 350 : 550,
    },
    {
      content: isMobile ? "  plazo: 'Urgente'" : "  plazo: 'Lo antes posible'",
      type: "property",
      delay: isMobile ? 300 : 500,
    },
    {
      content: "};",
      type: "declaration",
      delay: isMobile ? 400 : 600,
    },
    {
      content: "",
      type: "empty",
      delay: isMobile ? 200 : 400,
    },
    {
      content: isMobile ? "// Aplicando metodología..." : "// Aplicando nuestra metodología...",
      type: "comment",
      delay: isMobile ? 500 : 800,
    },
    {
      content: isMobile
        ? "const resultado = await gretsoft.crear(tuNegocio);"
        : "const resultado = await gretsoft.crear(tuNegocio);",
      type: "execution",
      delay: isMobile ? 700 : 1000,
    },
    {
      content: "// ✨ ¡Su solución está lista!",
      type: "success",
      delay: isMobile ? 600 : 900,
    },
  ]

  // Función para limpiar todos los timeouts
  const clearAllTimeouts = useCallback(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = undefined
    }
    if (lineTimeoutRef.current) {
      clearTimeout(lineTimeoutRef.current)
      lineTimeoutRef.current = undefined
    }
  }, [])

  // Función para resetear el estado
  const resetState = useCallback(() => {
    setVisibleLines([])
    setCurrentLineIndex(0)
    setCurrentText("")
    setIsTyping(false)
  }, [])

  // Función principal para iniciar la animación
  const startTypingAnimation = useCallback(() => {
    if (isAnimationActive || hasStarted) return

    setHasStarted(true)
    setIsAnimationActive(true)
    clearAllTimeouts()
    resetState()

    typingTimeoutRef.current = setTimeout(() => {
      typeCurrentLine(0)
    }, 100)
  }, [isAnimationActive, hasStarted])

  // Función para escribir una línea específica
  const typeCurrentLine = useCallback(
    (lineIndex: number) => {
      if (lineIndex >= codeSteps.length) {
        setIsAnimationActive(false)
        return
      }

      const currentStep = codeSteps[lineIndex]
      setCurrentLineIndex(lineIndex)
      setIsTyping(true)
      setCurrentText("")

      let charIndex = 0

      const typeNextChar = () => {
        if (charIndex < currentStep.content.length) {
          setCurrentText(currentStep.content.substring(0, charIndex + 1))
          charIndex++
          // Velocidad de escritura más rápida en móviles
          const typingSpeed = isMobile ? 30 + Math.random() * 20 : 50 + Math.random() * 30
          typingTimeoutRef.current = setTimeout(typeNextChar, typingSpeed)
        } else {
          setIsTyping(false)
          setVisibleLines((prev) => [...prev, currentStep.content])
          setCurrentText("")

          lineTimeoutRef.current = setTimeout(() => {
            typeCurrentLine(lineIndex + 1)
          }, currentStep.delay)
        }
      }

      typeNextChar()
    },
    [isMobile],
  )

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(".terminal-window", {
        opacity: 1,
        scale: 1,
        y: 0,
      })

      // Efecto de brillo más sutil en móviles
      gsap.to(".terminal-header", {
        boxShadow: isMobile ? "0 0 10px rgba(168, 85, 247, 0.2)" : "0 0 20px rgba(168, 85, 247, 0.3)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      setTimeout(
        () => {
          startTypingAnimation()
        },
        isMobile ? 500 : 800,
      )
    }, containerRef)

    return () => {
      ctx.revert()
      clearAllTimeouts()
    }
  }, [startTypingAnimation, clearAllTimeouts, isMobile])

  useEffect(() => {
    return () => {
      clearAllTimeouts()
    }
  }, [clearAllTimeouts])

  // Actualizar la hora - formato más corto en móviles
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = isMobile
        ? now.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
        : now.toLocaleTimeString()
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [isMobile])

  const getLineColor = (type: string) => {
    switch (type) {
      case "comment":
        return "text-green-400"
      case "declaration":
        return "text-blue-400"
      case "property":
        return "text-yellow-300"
      case "method":
        return "text-purple-400"
      case "execution":
        return "text-cyan-400"
      case "success":
        return "text-emerald-400"
      default:
        return "text-gray-300"
    }
  }

  const isAnimationCompleted = !isAnimationActive && hasStarted && currentLineIndex >= codeSteps.length

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      <div className="terminal-window w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gray-900/95 backdrop-blur-sm border border-primary/30 rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl">
        {/* Terminal Header - Responsive */}
        <div className="terminal-header flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-purple-500/20 border-b border-primary/20">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-lg"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-lg"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-lg"></div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 ml-2 sm:ml-3">
            <Code className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm text-primary font-mono hidden xs:inline">gretsoft-terminal</span>
            <span className="text-xs text-primary font-mono xs:hidden">terminal</span>
          </div>
          <div className="ml-auto text-xs text-gray-400 font-mono">{currentTime}</div>
        </div>

        {/* Terminal Content - Responsive */}
        <div className="p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm min-h-[320px] xs:min-h-[360px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] relative overflow-hidden">
          {/* Líneas de código completadas */}
          {visibleLines.map((line, index) => (
            <div
              key={index}
              className={`${getLineColor(codeSteps[index]?.type || "default")} mb-1 sm:mb-2 leading-relaxed ${
                codeSteps[index]?.type === "empty" ? "h-2 sm:h-4" : ""
              } break-all sm:break-normal`}
            >
              {line}
            </div>
          ))}

          {/* Línea actual siendo escrita */}
          {currentLineIndex < codeSteps.length && hasStarted && (
            <div
              className={`${getLineColor(codeSteps[currentLineIndex].type)} mb-1 sm:mb-2 inline-flex leading-relaxed break-all sm:break-normal`}
            >
              <span>{currentText}</span>
              <div
                className={`w-1.5 h-4 sm:w-2 sm:h-5 bg-primary ml-1 transition-opacity duration-150 ${
                  isTyping ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          )}

          {/* Prompt del terminal */}
          {isAnimationCompleted && (
            <div className="inline-flex items-center mt-4 sm:mt-4 mb-8 sm:mb-6">
              <span className="text-gray-400 mr-2">$</span>
              <div className="w-1.5 h-4 sm:w-2 sm:h-5 bg-primary animate-pulse" />
            </div>
          )}

          {/* Partículas flotantes - Reducidas en móviles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(isMobile ? 4 : 8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary/40 rounded-full animate-pulse"
                style={{
                  left: `${20 + i * (isMobile ? 15 : 10)}%`,
                  top: `${30 + ((i * 15) % 40)}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Barra de progreso - Responsive */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
            <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400">
              <span className="hidden sm:inline">{isAnimationCompleted ? "Completado" : "Compilando"}</span>
              <span className="sm:hidden">{isAnimationCompleted ? "OK" : "..."}</span>
              <div className="flex-1 h-0.5 sm:h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-purple-500"
                  initial={{ width: "0%" }}
                  animate={{
                    width: isAnimationCompleted
                      ? "100%"
                      : `${((visibleLines.length + (isTyping ? 0.5 : 0)) / codeSteps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <span className="text-xs">
                {isAnimationCompleted
                  ? "100%"
                  : Math.round(((visibleLines.length + (isTyping ? 0.5 : 0)) / codeSteps.length) * 100)}
                %
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Efectos de fondo - Simplificados en móviles */}
      <div className="absolute inset-0 -z-10">
        {/* Círculos de código flotantes */}
        {[...Array(isMobile ? 3 : 6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-primary/20 rounded-full flex items-center justify-center text-primary/40 text-xs sm:text-sm"
            style={{
              left: `${10 + i * (isMobile ? 25 : 15)}%`,
              top: `${20 + ((i * 20) % 60)}%`,
            }}
            animate={{
              y: [0, isMobile ? -10 : -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, isMobile ? 1.05 : 1.1, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.4,
            }}
          >
            {["{}", "()", "[]", "<>", "/>", "&&"][i]}
          </motion.div>
        ))}

        {/* Líneas de conexión - Simplificadas en móviles */}
        {!isMobile && (
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
                <stop offset="50%" stopColor="rgba(168, 85, 247, 0.3)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
              </linearGradient>
            </defs>
            {[...Array(4)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${20 + i * 20}%`}
                y1={`${30 + i * 10}%`}
                x2={`${40 + i * 15}%`}
                y2={`${60 + i * 5}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.3,
                }}
              />
            ))}
          </svg>
        )}
      </div>
    </div>
  )
}

const features = [
  { icon: Code, text: "Desarrollo a medida" },
  { icon: Zap, text: "Soluciones eficientes" },
  { icon: Sparkles, text: "Tecnología moderna" },
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0 : 0.03,
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  }

  return (
    <div id="home" className="relative isolate overflow-hidden min-h-screen flex items-center">
      {/* Simplified background elements with CSS-based responsive blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
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
                <span className="text-glow">Desarrollo de Software Personalizado</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 variants={fadeIn} className="max-w-lg text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Desarrollamos soluciones{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 text-glow">
              digitales integrales
            </span>
          </motion.h1>

          <motion.p variants={fadeIn} className="mt-6 text-lg leading-8 text-muted-foreground">
            Desde aplicaciones web hasta sistemas de gestión empresarial. Trabajamos junto a vos para crear
            soluciones tecnológicas que optimicen sus procesos y potencien su crecimiento.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
            <AnimatedButton text="Consulte su proyecto" href="#contact" className="w-full sm:w-auto" />
            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="pulse-button w-full rounded-full border border-primary/20 px-8 py-3 bg-primary-foreground text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary/30 hover:tracking-wider active:translate-y-1">
                Ver nuestros proyectos
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
          initial={{ opacity: 0, scale: isMobile ? 0.98 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: animationSettings.duration,
            ease: "easeOut",
            delay: animationSettings.delay,
          }}
          className="mt-8 sm:mt-16 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative"
        >
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-lg sm:blur-xl md:blur-3xl opacity-30 rounded-full will-change-auto" />

          {/* Componente animado completamente responsive */}
          <div className="mx-auto w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] h-[360px] xs:h-[400px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl md:shadow-2xl ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] hover-glow relative overflow-hidden">
            <EnhancedCodeAnimation />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
