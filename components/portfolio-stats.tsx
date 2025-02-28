"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Users, Star, Award } from "lucide-react"

export function PortfolioStats() {
  const stats = useMemo(
    () => [
      { name: "Soluciones a Medida", value: "100%", icon: Code2 },
      { name: "Cercanía con el Cliente", value: "Siempre", icon: Users },
      { name: "Proyectos en Crecimiento", value: "Cada Día", icon: Star },
      { name: "Visión a Futuro", value: "Innovación Constante", icon: Award },
    ],
    [],   
  )

  return (
    <div className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="relative overflow-hidden border-none bg-background/60 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 text-purple-500 dark:text-purple-400">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <dt className="text-sm font-medium text-muted-foreground truncate">{stat.name}</dt>
                  <dd className="mt-2 text-3xl font-semibold tracking-tight">{stat.value}</dd>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  )
}

