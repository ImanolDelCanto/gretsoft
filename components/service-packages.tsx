"use client"

import { motion } from "framer-motion"
import { Check, ArrowUpRight } from "lucide-react"

const WHATSAPP = "https://wa.me/5491126763301"

const packages = [
  {
    id: "landing",
    name: "Landing Page",
    tagline: "Una página enfocada en convertir.",
    features: [
      "Página única diseñada a medida",
      "Optimizada para captar leads y vender",
      "Dominio y hosting por 12 meses",
      "Formulario de contacto a tu correo",
      "SEO básico y alto rendimiento",
      "Botón flotante de WhatsApp",
      "Soporte gratuito el primer mes",
    ],
    featured: false,
  },
  {
    id: "web",
    name: "Página Web",
    tagline: "Tu presencia digital completa.",
    features: [
      "Hasta 4 secciones a medida (Inicio + 3)",
      "Diseño moderno con animaciones",
      "Dominio y hosting premium 12 meses",
      "Formulario de contacto integrado",
      "Optimización SEO y velocidad",
      "Diseño responsive en todos los dispositivos",
      "Redes sociales y WhatsApp integrados",
      "Soporte técnico gratuito el primer mes",
    ],
    featured: true,
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    tagline: "Vendé online, sin límites de horario.",
    features: [
      "Tienda online con identidad propia",
      "Carga inicial de hasta 20 productos",
      "Pagos integrados con Mercado Pago",
      "Panel de administración autogestionable",
      "Dominio y hosting por 12 meses",
      "Soporte y mantenimiento por 2 meses",
      "Carrito, redes y WhatsApp integrados",
    ],
    featured: false,
  },
]

export function ServicePackages() {
  return (
    <section id="planes" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Planes</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Puntos de partida claros.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Si tu proyecto encaja en uno de estos planes, arrancamos rápido.
            ¿Necesitás algo más complejo? Lo cotizamos a medida.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              className={
                pkg.featured
                  ? "relative flex flex-col rounded-2xl border border-primary/50 bg-card p-8"
                  : "surface surface-hover relative flex flex-col rounded-2xl p-8"
              }
            >
              {pkg.featured && (
                <>
                  <div className="absolute -inset-px -z-10 rounded-2xl bg-primary/10 blur-md" />
                  <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground">
                    Más elegido
                  </span>
                </>
              )}

              <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pkg.tagline}</p>

              <div className="my-6 h-px w-full bg-border" />

              <ul className="flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="leading-snug text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(
                  `Hola! Quiero más información sobre el plan ${pkg.name}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  pkg.featured
                    ? "btn-primary mt-8 w-full"
                    : "btn-ghost mt-8 w-full"
                }
              >
                Consultar por WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
