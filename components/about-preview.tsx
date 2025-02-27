"use client"

import { useMemo } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutPreview() {
  const stats = useMemo(
    () => [
      { stat: "100%", label: "Soluciones a Medida" },
      { stat: "Innovación", label: "Como Estándar" },
      { stat: "Colaboración", label: "Con Nuestros Clientes" },
      { stat: "Visión", label: "Para el Futuro" },
    ],
    [],
  )

  return (
    <section className="relative isolate overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Innovación y Experiencia
              <br />
              <span className="text-purple-600 dark:text-purple-400">en Desarrollo Web</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Con más de 2 años de experiencia, en GretSoft nos especializamos en transformar ideas en soluciones
              digitales excepcionales. Nuestro equipo combina creatividad y expertise técnico para crear experiencias
              web que destacan.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <Button asChild>
                <Link href="/about">
                  Conoce más sobre nosotros
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-64 -right-64 opacity-50 blur-3xl" aria-hidden="true">
              <div
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="relative rounded-xl border bg-background/50 backdrop-blur-sm shadow-2xl">
              <div className="p-8">
                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div key={item.label} className="border-l-4 border-purple-500 pl-4">
                      <dt className="text-sm font-medium text-muted-foreground">{item.label}</dt>
                      <dd className="mt-1 text-3xl font-semibold tracking-tight text-purple-600 dark:text-purple-400">
                        {item.stat}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

