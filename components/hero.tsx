"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"
import { HeroOrb } from "./hero-orb"

const proof = [
  "Software a medida",
  "Apps web y sistemas",
  "Soporte real post-entrega",
]

export function Hero() {
  const reduce = useReducedMotion()

  const ease = [0.22, 1, 0.36, 1] as const
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  })

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pb-20 pt-36 sm:pt-44 lg:pb-28"
    >
      <div className="absolute left-1/2 top-10 -z-10 h-[460px] w-[760px] -translate-x-1/2 glow-radial animate-glow-pulse" />

      <div className="container-x">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div>
            <motion.div {...rise(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Estudio de desarrollo de software
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="mt-7 max-w-[15ch] text-balance font-display text-[2.7rem] font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4rem]"
            >
              Construimos el{" "}
              <span className="text-accent-gradient">software</span> que tu
              empresa necesita.
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              No solo páginas web. Desarrollamos aplicaciones, sistemas de
              gestión e integraciones a medida — pensados para resolver
              problemas reales y crecer con tu negocio.
            </motion.p>

            <motion.div
              {...rise(0.24)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link href="#contacto" className="btn-primary">
                Iniciar un proyecto
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="btn-ghost">
                Ver nuestros trabajos
              </Link>
            </motion.div>

            <motion.ul
              {...rise(0.32)}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            >
              {proof.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* 3D node-network orb */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-[480px]"
          >
            {/* Core glow — cyan with a violet companion */}
            <div className="absolute left-[42%] top-[44%] -z-10 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[70px]" />
            <div className="absolute left-[62%] top-[58%] -z-10 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent2/25 blur-[70px]" />

            {/* Rotating accent rings */}
            <div className="absolute inset-[8%] -z-10 animate-spin-slow rounded-full border border-primary/15" />
            <div
              className="absolute inset-[20%] -z-10 rounded-full border border-dashed border-accent2/20"
              style={{ animation: "spin-slow 22s linear infinite reverse" }}
            />

            <HeroOrb />

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 1.1 }}
              className="surface absolute -bottom-2 -left-2 rounded-xl px-5 py-4 sm:-left-6"
            >
              <p className="font-display text-2xl font-bold text-primary">100%</p>
              <p className="text-xs text-muted-foreground">
                A medida, sin plantillas
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
