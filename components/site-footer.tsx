"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, ArrowUpRight } from "lucide-react"

const navigation = [
  { name: "Servicios", href: "/#servicios" },
  { name: "Planes", href: "/#planes" },
  { name: "Proceso", href: "/#proceso" },
  { name: "Trabajos", href: "/portfolio" },
  { name: "Nosotros", href: "/about" },
]

const services = [
  "Software a medida",
  "Aplicaciones web",
  "Sistemas de gestión",
  "E-commerce",
  "Sitios & Landing pages",
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="container-x py-16">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-border pb-12 sm:flex-row sm:items-center">
          <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
            ¿Tenés un proyecto en mente?
          </h2>
          <Link href="/#contacto" className="btn-primary flex-shrink-0">
            Hablemos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="sr-only">GretSoft</span>
              <Image
                src="/gretsoft1.webp"
                alt="GretSoft"
                width={520}
                height={520}
                loading="lazy"
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Estudio de desarrollo de software. Construimos soluciones
              digitales a medida para empresas que quieren crecer.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Navegación
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="/#servicios"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:gretsoft@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  gretsoft@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5411-2676-3301"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  (+54) 11 2676-3301
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gretsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/gretsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GretSoft. Todos los derechos
            reservados.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
