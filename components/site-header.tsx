"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { MenuIcon, X, ArrowUpRight } from "lucide-react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navigation = useMemo(
    () => [
      { name: "Servicios", href: "/#servicios" },
      { name: "Proceso", href: "/#proceso" },
      { name: "Trabajos", href: "/portfolio" },
      { name: "Nosotros", href: "/about" },
    ],
    [],
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav
          className="mx-auto flex h-20 w-full max-w-content items-center justify-between px-6 lg:px-8"
          aria-label="Principal"
        >
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            onClick={closeMenu}
          >
            <span className="sr-only">GretSoft</span>
            <Image
              src="/gretsoft2.webp"
              alt="GretSoft"
              width={520}
              height={120}
              priority
              className="h-7 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Link href="/#contacto" className="btn-primary">
              Iniciar proyecto
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "lg:hidden",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "fixed inset-0 top-20 bg-background/95 backdrop-blur-xl transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="flex flex-col gap-1 px-6 pt-8">
            {navigation.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
                className={cn(
                  "border-b border-border/60 py-5 font-display text-2xl font-semibold transition-all duration-300",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={closeMenu}
              className="btn-primary mt-8 w-full"
            >
              Iniciar proyecto
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
