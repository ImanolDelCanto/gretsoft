"use client"

import { useMemo } from "react"
import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  const navigation = useMemo(
    () => [
      { name: "Inicio", href: "/" },
      { name: "Nosotros", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Contacto", href: "/#contact" },
    ],
    [],
  )

  const services = useMemo(
    () => [
      { name: "Landing Pages", href: "/#services" },
      { name: "E-commerce", href: "/#services" },
      { name: "Sitios Web Corporativos", href: "/#services" },
      { name: "Aplicaciones Web", href: "/#services" },
      { name: "SEO", href: "/#services" },
    ],
    [],
  )

  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="sr-only">GretSoft</span>
              <Image
                className="h-24 w-auto"
                src="/gretsoft1.webp"
                alt="GretSoft Logo"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Soluciones web profesionales y personalizadas para hacer crecer tu negocio digital.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Navegación</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:gretsoft@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  gretsoft@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/gretsoft"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  target="_blank"
                >
                  GretSoft en Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/gretsoft"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  target="_blank"
                >
                  GretSoft en LinkedIn
                </Link>
              </li>
              <li>
                <a
                  href="tel:+5411-2676-3301"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  (+54) 11 2676-3301
                </a>
              </li>
              <li className="text-sm text-muted-foreground">Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t py-8 flex flex-col items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} GretSoft. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

