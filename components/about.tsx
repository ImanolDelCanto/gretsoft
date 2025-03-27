"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import { Users, Target, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const values = useMemo(
    () => [
      {
        title: "Experiencia",
        description:
          "Más de 2 años desarrollando soluciones web innovadoras y efectivas para empresas de diversos sectores.",
        icon: Users,
      },
      {
        title: "Compromiso",
        description:
          "Nos comprometemos con cada proyecto para entregar resultados excepcionales que superen las expectativas.",
        icon: Target,
      },
      {
        title: "Innovación",
        description:
          "Utilizamos las últimas tecnologías y mejores prácticas para crear soluciones web modernas y escalables.",
        icon: Lightbulb,
      },
    ],
    [],
  )

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-conic from-primary/30 via-purple-500/30 to-primary/30 rounded-full blur-[100px] animate-spin-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-conic from-purple-500/30 via-primary/30 to-purple-500/30 rounded-full blur-[100px] animate-spin-slow animation-delay-2000" />

        {/* Animated lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px)] bg-[size:40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Sobre Nosotros
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 h-24"
          >
            Transformando negocios a través de la tecnología
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="mt-2 text-lg leading-8 text-muted-foreground">
              En GretSoft, creemos que cada negocio merece una presencia digital única y poderosa. Nuestra misión es
              transformar ideas en soluciones web innovadoras, siempre priorizando la satisfacción del cliente.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Nos diferenciamos por nuestra cercanía y compromiso: trabajamos de la mano con cada cliente, asegurándonos
              de que el resultado final sea exactamente lo que necesita. Para nosotros, un proyecto no está terminado
              hasta que el cliente está completamente satisfecho.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Fundamos GretSoft con una visión clara: solucionar problemas y crear oportunidades a través de la
              tecnología. Nos apasiona desarrollar experiencias digitales que no solo funcionen, sino que también
              aporten valor real a quienes las utilizan. Miramos hacia el futuro con la convicción de que la innovación
              es clave. Por eso, estamos en constante evolución, explorando nuevas tecnologías y adaptándonos a las
              necesidades cambiantes del mundo digital.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Si buscas un equipo que te escuche, te acompañe y haga realidad tu visión con precios accesibles y un
              servicio personalizado, GretSoft es para vos.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
            >
              <Card className="relative overflow-hidden border-none bg-background/40 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-purple-500"
                  >
                    <value.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </motion.div>
                  <motion.dt
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="mt-4 text-lg font-semibold leading-7"
                  >
                    {value.title}
                  </motion.dt>
                  <motion.dd
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 * index }}
                    className="mt-2 leading-7 text-muted-foreground"
                  >
                    {value.description}
                  </motion.dd>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

