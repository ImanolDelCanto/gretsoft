"use client"
import { useCallback, useMemo, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MenuIcon, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navigation = useMemo(
    () => [
      { name: "Inicio", href: "/" },
      { name: "Nosotros", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
    ],
    [],
  )

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const closeSheet = useCallback(() => setIsOpen(false), [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-0",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-transform duration-300 hover:scale-105">
            <span className="sr-only">GretSoft</span>
            <Image
              className="h-24 w-auto sm:h-20 md:h-24 lg:h-28"
              src="/gretsoft2.png"
              alt="GretSoft Logo"
              width={1000}
              height={1000}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-base font-semibold leading-6 text-foreground hover:text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300">
            <Link href="/#contact">Contáctanos</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-sm border-l border-border/50 backdrop-blur-lg bg-background/95"
            >
              <SheetHeader className="flex flex-row items-center justify-between">
                <SheetTitle className="text-left">Menú</SheetTitle>
                <Button variant="ghost" size="icon" onClick={closeSheet} aria-label="Cerrar menú">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Cerrar menú</span>
                </Button>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeSheet}
                    className="group flex items-center gap-2 text-lg font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-all duration-300 ease-in-out"
                  >
                    <span className="relative overflow-hidden">
                      {item.name}
                      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <Button asChild className="w-full rounded-full shadow-md">
                    <Link href="/#contact" onClick={closeSheet}>
                      Contáctanos
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

