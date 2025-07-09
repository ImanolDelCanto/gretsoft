"use client"

import { useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutTimeline() {
  const timeline = useMemo(
    () => [
      {
        year: "2023",
        title: "Los Inicios",
        description: "Fundación de GretSoft con la visión de transformar ideas en soluciones digitales innovadoras.",
        badge: "Fundación",
      },
      {
        year: "2024",
        title: "Primeros Proyectos",
        description: "Desarrollamos nuestros primeros proyectos web y aplicaciones móviles, estableciendo nuestra metodología de trabajo y procesos de calidad.",
        badge: "Desarrollo",
      },
      {
        year: "2025",
        title: "Liderando el Cambio",
        description:
          "Continuamos innovando y expandiendo nuestros servicios para satisfacer las necesidades digitales del futuro, con enfoque en IA y tecnologías emergentes.",
        badge: "Presente",
      },
    ],
    [],
  )

  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">
            Nuestra Trayectoria
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Un Viaje de Innovación Continua</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Descubre cómo hemos evolucionado y crecido a lo largo de los años, siempre manteniendo nuestro compromiso
            con la excelencia.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-24">
          <div className="space-y-8">
            {timeline.map((item) => (
              <Card key={item.year} className="relative overflow-hidden border-none bg-background/60 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-blue-500" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-x-4">
                    <div className="flex-none rounded-full bg-gray-100 p-2 text-purple-600 dark:bg-gray-800 dark:text-purple-400">
                      <div className="h-8 w-8 font-bold leading-8 text-center">{item.year}</div>
                    </div>
                    <div className="flex-auto">
                      <div className="flex items-center gap-x-4">
                        <h3 className="flex-none text-lg font-semibold">{item.title}</h3>
                        <Badge variant="secondary" className="rounded-full">
                          {item.badge}
                        </Badge>
                      </div>
                      <p className="mt-3 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

