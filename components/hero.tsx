"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { Code, Sparkles, Zap } from "lucide-react"
import { AnimatedButton } from "./ui/animated-button"
import { useEffect, useState, useRef } from "react"

// Componente de animación simplificado
function EnhancedCodeAnimation() {
  const [displayText, setDisplayText] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [, setCurrentCharIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Detectar móvil de forma simple
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const codeLines = [
    { text: "// Bienvenido a Gretsoft", type: "comment" },
    { text: "const tuNegocio = {", type: "declaration" },
    {
      text: "  problema: 'Necesito digitalizar mi empresa',",
      type: "property",
    },
    { text: "  objetivo: 'Aumentar ventas y eficiencia',", type: "property" },
    { text: " presupuesto: 'Flexible y escalable',", type: "property" },
    { text: "  plazo: 'Lo antes posible'", type: "property" },
    { text: "};", type: "declaration" },
    { text: "", type: "empty" },
    { text: "// Aplicando nuestra metodología...", type: "comment" },
    { text: "const resultado = await gretsoft.crear(tuNegocio);", type: "execution" },
    { text: "// ✨ ¡Su solución está lista!", type: "success" },
  ]


  // Animación principal
  useEffect(() => {
    const startAnimation = () => {
      // Limpiar estados
      setDisplayText([])
      setCurrentLineIndex(0)
      setCurrentCharIndex(0)
      setIsComplete(false)

      let lineIndex = 0
      let charIndex = 0

      const typeNextCharacter = () => {
        if (lineIndex >= codeLines.length) {
          setIsComplete(true)
          return
        }

        const currentLine = codeLines[lineIndex]

        if (charIndex < currentLine.text.length) {
          // Escribir siguiente carácter
          setDisplayText((prev) => {
            const newText = [...prev]
            newText[lineIndex] = currentLine.text.substring(0, charIndex + 1)
            return newText
          })
          charIndex++

          // Velocidad de escritura
          const speed = 80
          timeoutRef.current = setTimeout(typeNextCharacter, speed)
        } else {
          // Línea completada, pasar a la siguiente SIN volver a setear la línea
          lineIndex++
          charIndex = 0
          setCurrentLineIndex(lineIndex)

          // Pausa entre líneas
          const delay = currentLine.type === "empty" ? 200 : isMobile ? 400 : 600
          timeoutRef.current = setTimeout(typeNextCharacter, delay)
        }
      }

      // Iniciar después de un delay
      timeoutRef.current = setTimeout(typeNextCharacter, isMobile ? 500 : 800)
    }

    startAnimation()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isMobile]) // Re-ejecutar cuando cambie el tamaño

  const getLineColor = (type: string) => {
    switch (type) {
      case "comment":
        return "text-green-400"
      case "declaration":
        return "text-blue-400"
      case "property":
        return "text-yellow-300"
      case "execution":
        return "text-cyan-400"
      case "success":
        return "text-emerald-400"
      default:
        return "text-gray-300"
    }
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-transparent">
      <div className="terminal-window w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gray-900/95 backdrop-blur-sm border border-primary/30 rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl">
        {/* Terminal Header */}
        <div className="terminal-header flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-purple-500/20 border-b border-primary/20">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 ml-2 sm:ml-3">
            <Code className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm text-primary font-mono">terminal</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm min-h-[300px] sm:min-h-[320px] relative">
          {/* Líneas de código */}
          {displayText.map((line, index) => (
            <div
              key={index}
              className={`leading-relaxed ${getLineColor(codeLines[index]?.type || "default")} ${
                index === displayText.length - 1 ? "mb-6 sm:mb-8" : "mb-1 sm:mb-2"
              }`}
            >
              {line}
              {/* Cursor parpadeante solo en la línea actual que se está escribiendo */}
              {index === currentLineIndex && !isComplete && (
                <span className="ml-1 w-2 h-4 bg-primary animate-pulse inline-block">|</span>
              )}
            </div>
          ))}


          {/* Barra de progreso */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>{isComplete ? "Completado" : "Compilando"}</span>
              <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300"
                  style={{ width: `${(displayText.length / codeLines.length) * 100}%` }}
                />
              </div>
              <span>{Math.round((displayText.length / codeLines.length) * 100)}%</span>
            </div>
          </div>
        </div>
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


  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div id="home" className="relative isolate overflow-hidden min-h-screen flex items-center">
      {/* Pega aquí el nuevo fondo */}
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
            Desde aplicaciones web hasta sistemas de gestión empresarial. Trabajamos junto a vos para crear soluciones
            tecnológicas que optimicen sus procesos y potencien su crecimiento.
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-8 sm:mt-16 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative"
        >
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl opacity-30 rounded-full" />

          <div className="mx-auto w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] h-[360px] xs:h-[400px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-lg sm:rounded-xl shadow-2xl ring-1 ring-white/10 transition-transform duration-300 hover:scale-105 relative overflow-hidden">
            <EnhancedCodeAnimation />
          </div>
        </motion.div>
      </div>
    </div>
  )
}