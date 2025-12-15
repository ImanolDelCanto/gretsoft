"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type Testimonial = {
  id: number
  name: string
  role: string
  quote: string
  rating?: number
  avatarUrl?: string
}

function clampIndex(i: number, len: number) {
  return ((i % len) + len) % len
}

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("")
}

function Stars({ value = 5 }: { value?: number }) {
  const v = Math.max(0, Math.min(5, value))
  return (
    <div className="flex items-center gap-1" aria-label={`${v} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < v
        return (
          <svg
            key={i}
            className={`h-4 w-4 ${filled ? "text-amber-400" : "text-muted-foreground/30"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.363 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.785.57-1.84-.197-1.54-1.118l1.286-3.95a1 1 0 00-.363-1.118L2.073 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
          </svg>
        )
      })}
    </div>
  )
}

function TestimonialCard({
  t,
  onClick,
}: {
  t: Testimonial
  onClick?: () => void
}) {
  return (
    <article
      onClick={onClick}
      className="w-[320px] sm:w-[360px] rounded-2xl border bg-background/80 dark:bg-card/70 backdrop-blur-md shadow-xl px-6 py-6 cursor-pointer select-none"
    >
      <header className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border bg-muted flex items-center justify-center">
          {t.avatarUrl ? (
            <Image src={t.avatarUrl} alt={t.name} fill className="object-cover" />
          ) : (
            <span className="text-sm font-semibold text-foreground/80">{initials(t.name)}</span>
          )}
        </div>

        <div className="min-w-0">
          <div className="text-sm font-semibold text-foreground truncate">{t.name}</div>
          <div className="text-xs text-muted-foreground truncate">{t.role}</div>
          <div className="mt-1">
            <Stars value={t.rating ?? 5} />
          </div>
        </div>
      </header>

      <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
        {t.quote}
      </p>
    </article>
  )
}

export function Testimonials() {
  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        id: 1,
        name: "Shanti Hogar",
        role: "E-commerce",
        quote:
          "“Necesitábamos digitalizar nuestras ventas rápidamente. GretSoft nos entregó un e-commerce profesional integrado con pagos y un flujo de compra simple.”",
        rating: 5,
      },
      {
        id: 2,
        name: "Experiencias Aéreas",
        role: "Landing Page",
        quote:
          "“La landing que nos desarrollaron capta la atención al instante y mejora el contacto de clientes. Se nota el enfoque en conversión y performance.”",
        rating: 5,
      },
      {
        id: 3,
        name: "Alumbar Online",
        role: "Web + Catálogo",
        quote:
          "“La web incluye catálogo y formulario de contacto. Ahora los clientes pueden explorar todo online y consultar más rápido.”",
        rating: 5,
      },
      {
        id: 4,
        name: "Gestión Empresarial",
        role: "Aplicación Web",
        quote:
          "“Implementamos una app web para inventario y ventas en tiempo real. Bajamos tiempos operativos y mejoramos la visibilidad del negocio.”",
        rating: 5,
      },
    ],
    [],
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const len = testimonials.length
  const center = clampIndex(currentIndex, len)
  const left = clampIndex(center - 1, len)
  const right = clampIndex(center + 1, len)

  const goPrev = () => setCurrentIndex((i) => clampIndex(i - 1, len))
  const goNext = () => setCurrentIndex((i) => clampIndex(i + 1, len))
  const goTo = (idx: number) => setCurrentIndex(clampIndex(idx, len))

  const positions = [
    { slot: "left" as const, idx: left },
    { slot: "center" as const, idx: center },
    { slot: "right" as const, idx: right },
  ]

  const slotAnim = {
    left: { x: -220, scale: 0.92, rotate: -6, opacity: 0.45 },
    center: { x: 0, scale: 1, rotate: 0, opacity: 1 },
    right: { x: 220, scale: 0.92, rotate: 6, opacity: 0.45 },
  } as const

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado similar a la foto */}
        <div className="mx-auto max-w-2xl text-center relative">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-primary">
            Lo que dicen nuestros clientes
          </p>

          <div className="relative mt-2">
            <div className="absolute inset-x-0 -top-6 pointer-events-none select-none">
              <span className="hidden sm:block text-6xl font-extrabold tracking-wider text-foreground/5">
                Testimonios
              </span>
            </div>

            <h2 className="relative text-3xl sm:text-4xl font-bold text-foreground">
              Testimonios
            </h2>
          </div>
        </div>

        {/* Panel grande como en la imagen */}
        <div className="mt-10 rounded-3xl border bg-background/70 dark:bg-card/40 backdrop-blur-xl shadow-2xl px-6 sm:px-10 py-10 sm:py-14">
          <div className="relative flex items-center justify-center">
            {/* Flechas */}
            <button
              type="button"
              aria-label="Anterior"
              onClick={goPrev}
              className="absolute left-0 sm:left-2 z-40 h-10 w-10 rounded-full border bg-background/80 dark:bg-card/70 text-muted-foreground hover:text-foreground hover:shadow-md transition"
            >
              <span className="sr-only">Anterior</span>
              <svg className="mx-auto h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                  transform="rotate(180 10 10)"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Siguiente"
              onClick={goNext}
              className="absolute right-0 sm:right-2 z-40 h-10 w-10 rounded-full border bg-background/80 dark:bg-card/70 text-muted-foreground hover:text-foreground hover:shadow-md transition"
            >
              <span className="sr-only">Siguiente</span>
              <svg className="mx-auto h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Escenario */}
            <div className="relative w-full max-w-5xl h-[260px] sm:h-[240px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence initial={false}>
                  {positions.map(({ slot, idx }) => {
                    const t = testimonials[idx]
                    const isCenter = slot === "center"

                    return (
                      <motion.div
                        key={`${slot}-${t.id}-${center}`} // cambia cuando cambia el centro
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ ...slotAnim[slot], y: 0 }}
                        exit={{ opacity: 0, y: -10, scale: 0.96 }}
                        transition={{ duration: 0.35 }}
                        style={{ zIndex: isCenter ? 30 : 10 }}
                        className={`${slot === "center" ? "" : "hidden sm:block"} absolute`}
                      >
                        <TestimonialCard
                          t={t}
                          onClick={() => {
                            // click en laterales para traer al centro (como en la foto)
                            if (!isCenter) goTo(idx)
                          }}
                        />
                      </motion.div>
                    )
                  })}
                </AnimatePresence>

                {/* Móvil: solo tarjeta central */}
                <div className="sm:hidden">
                  <TestimonialCard t={testimonials[center]} />
                </div>
              </div>
            </div>
          </div>

          {/* Puntos (dots) */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => {
              const active = idx === center
              return (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Ir al testimonio ${idx + 1}`}
                  onClick={() => goTo(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    active ? "bg-foreground/80" : "bg-foreground/25 hover:bg-foreground/40"
                  }`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
