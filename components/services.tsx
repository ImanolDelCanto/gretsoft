"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { LayoutTemplate, ShoppingCart, Globe, Smartphone, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Optimizado pero manteniendo todas las animaciones originales
export function Services() {
  const [mounted, setMounted] = useState(false)

  // Asegurar que la hidratación esté completa antes de las animaciones
  useEffect(() => {
    setMounted(true)
  }, [])

  const services = useMemo(
    () => [
      {
        title: "Landing Pages",
        description: "Páginas de aterrizaje optimizadas para convertir visitantes en clientes.",
        icon: LayoutTemplate,
        gradient: "from-pink-500 to-rose-500",
        details:
          "Nuestras landing pages están diseñadas para captar la atención de tus visitantes y convertirlos en clientes potenciales. Utilizamos técnicas de diseño persuasivo, copywriting efectivo y llamados a la acción estratégicos para maximizar las conversiones. Cada página se optimiza para dispositivos móviles y se carga rápidamente para garantizar una experiencia de usuario óptima.",
      },
      {
        title: "E-commerce",
        description: "Tiendas online completas y personalizadas para vender tus productos.",
        icon: ShoppingCart,
        gradient: "from-purple-500 to-indigo-500",
        details:
          "Desarrollamos plataformas de comercio electrónico robustas y escalables que te permiten vender tus productos las 24 horas del día, los 7 días de la semana. Nuestras soluciones e-commerce incluyen catálogos de productos, carritos de compra, pasarelas de pago seguras, gestión de inventario y herramientas de marketing integradas para impulsar tus ventas online.",
      },
      {
        title: "Sitios Web Corporativos",
        description: "Presencia web profesional para tu empresa con diseño personalizado.",
        icon: Globe,
        gradient: "from-blue-500 to-cyan-500",
        details:
          "Creamos sitios web corporativos que reflejan la identidad y los valores de tu empresa. Nuestros diseños son elegantes, profesionales y totalmente personalizados para destacar tu marca. Incluimos secciones como 'Acerca de nosotros', 'Servicios', 'Portafolio' y 'Contacto', optimizadas para proporcionar la mejor información a tus clientes potenciales y mejorar tu credibilidad en línea.",
      },
      {
        title: "Aplicaciones Web",
        description: "Desarrollo de aplicaciones web escalables y responsivas.",
        icon: Smartphone,
        gradient: "from-teal-500 to-emerald-500",
        details:
          "Desarrollamos aplicaciones web potentes y escalables que pueden manejar desde tareas simples hasta procesos empresariales complejos. Utilizamos las últimas tecnologías y frameworks para crear aplicaciones rápidas, seguras y fáciles de usar. Ya sea que necesites un panel de administración, una plataforma de gestión de proyectos o una aplicación personalizada, tenemos la experiencia para hacerlo realidad.",
      },
      {
        title: "SEO",
        description: "Optimización para motores de búsqueda y mejora de visibilidad online.",
        icon: Search,
        gradient: "from-orange-500 to-amber-500",
        details:
          "Nuestros servicios de SEO están diseñados para mejorar la visibilidad de tu sitio web en los motores de búsqueda. Realizamos una auditoría completa de tu sitio, optimizamos el contenido y la estructura, construimos enlaces de calidad y monitoreamos el rendimiento. Nuestro objetivo es aumentar tu tráfico orgánico y mejorar tu posicionamiento para las palabras clave relevantes de tu negocio.",
      },
    ],
    [],
  )

  // Variantes de animación originales pero con renderizado optimizado
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="relative py-24 sm:py-32 w-full overflow-hidden">
      <div className="absolute inset-0 w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {mounted && (
          <motion.div
            className="mx-auto max-w-2xl lg:text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2
              variants={headerVariants}
              className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-700/30"
            >
              Nuestros Servicios
            </motion.h2>
            <motion.p
              variants={headerVariants}
              className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
            >
              Soluciones web completas para tu negocio
            </motion.p>
            <motion.p variants={headerVariants} className="mt-6 text-lg leading-8 text-muted-foreground">
              Ofrecemos una amplia gama de servicios web para ayudarte a establecer y hacer crecer tu presencia digital.
              Haz clic en cada servicio para obtener más información.
            </motion.p>
          </motion.div>
        )}

        {mounted && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            style={{ willChange: "transform, opacity" }} // Optimización del rendimiento de renderizado
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {services.slice(0, 5).map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  custom={index}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  whileHover={{
                    y: -15,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                  }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="group relative overflow-hidden border-none bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg cursor-pointer h-full">
                        <div
                          className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"
                          style={{ backgroundImage: `linear-gradient(to right, ${service.gradient})` }}
                        />

                        <CardHeader>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${service.gradient} shadow-md`}
                          >
                            <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </motion.div>
                          <CardTitle className="mt-4 text-xl font-semibold relative">
                            <span
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-transparent bg-clip-text"
                              style={{
                                backgroundImage: `linear-gradient(to right, ${service.gradient})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}
                            >
                              {service.title}
                            </span>
                            <span className="transition-opacity duration-300 group-hover:opacity-0">
                              {service.title}
                            </span>
                          </CardTitle>
                        </CardHeader>

                        <CardContent>
                          <CardDescription className="text-base">{service.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{service.title}</DialogTitle>
                        <DialogDescription>{service.description}</DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <p className="text-muted-foreground">{service.details}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default function ServicePlans() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Asegurar que la hidratación esté completa antes de las animaciones
  useEffect(() => {
    setMounted(true)
  }, [])

  // Observador de intersección mejorado con un umbral más bajo para activar antes
  useEffect(() => {
    if (!mounted) return

    const options = {
      threshold: 0.05, // Reducido para activar más temprano
      rootMargin: "0px 0px -10% 0px", // Activar antes de que el elemento esté completamente visible
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Desconectar el observador una vez visible para ahorrar recursos
        observer.disconnect()
      }
    }, options)

    const element = document.getElementById("plans-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [mounted])

  const plans = useMemo(
    () => [
      {
        name: "Plan Básico",
        price: "$15/mes",
        description: "Soporte Esencial",
        color: "from-green-500 to-emerald-500",
        features: [
          "Soporte técnico: Hasta 3 consultas al mes (por correo o WhatsApp).",
          "Corrección de errores menores: Fallos en diseño o pequeñas funcionalidades.",
          "Mantenimiento básico: Monitoreo de disponibilidad del sitio.",
          "Pequeñas actualizaciones en contenido (texto, imágenes).",
          "Tiempo de respuesta: 48-72 horas.",
        ],
        notIncluded: ["Cambios estructurales, nuevas funciones o diseño avanzado."],
        accent:
          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 ring-green-700/10 dark:ring-green-700/30",
        accentDark: "bg-green-500",
        accentLight: "bg-green-100",
      },
      {
        name: "Plan Estándar",
        price: "$20/mes",
        description: "Soporte + Mejoras Pequeñas",
        color: "from-blue-500 to-indigo-500",
        features: [
          "Todo lo del Plan Básico.",
          "Soporte técnico ampliado: Hasta 6 consultas al mes.",
          "Corrección de errores en funcionalidades: Formularios, botones, enlaces rotos, etc.",
          "Optimización de carga (imágenes, código).",
          "Ajustes menores en la estructura del sitio.",
          "Tiempo de respuesta: 24-48 horas.",
        ],
        notIncluded: [],
        accent:
          "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 ring-blue-700/10 dark:ring-blue-700/30",
        accentDark: "bg-blue-500",
        accentLight: "bg-blue-100",
        popular: true,
      },
      {
        name: "Plan Premium",
        price: "$30/mes",
        description: "Soporte Completo + Mejoras Constantes",
        color: "from-red-500 to-rose-500",
        features: [
          "Todo lo del Plan Estándar.",
          "Actualizaciones de contenido sin límite (texto, imágenes, secciones pequeñas).",
          "Mejoras en SEO para mejorar posicionamiento en Google.",
          "Soporte técnico prioritario: Hasta 10 consultas al mes.",
          "Mejoras en diseño y usabilidad (ajustes visuales, optimización UX).",
          "Implementación de nuevas funcionalidades menores.",
          "Tiempo de respuesta: 12-24 horas.",
        ],
        notIncluded: [],
        accent: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 ring-red-700/10 dark:ring-red-700/30",
        accentDark: "bg-red-500",
        accentLight: "bg-red-100",
      },
    ],
    [],
  )

  // Variantes de animación mejoradas para los planes - más pronunciadas y fluidas
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.7,
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.1,
        duration: 0.7,
      },
    },
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2,
        duration: 0.7,
      },
    },
  }

  // Variantes de animación mejoradas para los planes - más pronunciadas y fluidas
  const planVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.3 + i * 0.15,
        duration: 0.8,
      },
    }),
  }

  const loadFeatures = (i: number) => ({
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.6 + i * 0.05,
        duration: 0.5,
      },
    },
  })

  return (
    <div
      id="plans-section"
      className="relative py-18 w-full overflow-hidden bg-gradient-to-tr from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {mounted && (
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
              },
            },
          }}
        >
          <motion.h2
            variants={titleVariants}
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-700/30 m-4"
          >
            Planes de Mantenimiento
          </motion.h2>
          <motion.p
            variants={subtitleVariants}
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 m-4"
          >
            Mantén tu sitio web siempre actualizado
          </motion.p>
          <motion.p variants={descriptionVariants} className="mt-6 text-lg leading-8 text-muted-foreground m-4">
            Ofrecemos diferentes planes opcionales de mantenimiento para asegurar que tu sitio web esté siempre
            funcionando de manera óptima.
          </motion.p>
        </motion.div>
      )}

      {mounted && (
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 px-4 sm:px-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              variants={planVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{
                y: -15,
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              style={{ willChange: "transform, opacity" }} // Optimización de rendimiento
            >
              <Card
                className={`relative flex h-full flex-col rounded-3xl p-6 transition-all duration-300 ${
                  plan.popular
                    ? "z-10 bg-background shadow-xl ring-1 ring-gray-900/10 dark:ring-gray-700/30"
                    : "bg-background/60 backdrop-blur-sm"
                }`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 right-8"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                  >
                    <div className={`rounded-full ${plan.accent} px-3 py-1 text-sm font-semibold leading-6`}>
                      Más popular
                    </div>
                  </motion.div>
                )}
                <div className="mb-6">
                  <motion.h3
                    className="text-xl font-semibold leading-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}>{plan.name}</span>
                  </motion.h3>
                  <motion.p
                    className="mt-1 text-sm leading-6 text-muted-foreground"
                    initial={{ opacity: 0, y: -5 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
                    transition={{ delay: 0.45 + index * 0.1, duration: 0.5 }}
                  >
                    {plan.description}
                  </motion.p>
                  <div className="mt-4 flex items-baseline">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="text-4xl font-bold tracking-tight"
                    >
                      {plan.price}
                    </motion.span>
                  </div>
                </div>

                <div className="mt-2 flex-1">
                  <ul className="space-y-1 sm:space-y-2">
                    {plan.features.map((feature, featureIdx) => (
                      <motion.li
                        key={featureIdx}
                        variants={loadFeatures(featureIdx)}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        className="flex items-start"
                      >
                        <div className={`rounded-full ${plan.accentLight} p-1 mr-2 mt-1 flex-shrink-0`}>
                          <svg
                            className={`h-3 w-3 ${
                              plan.accentDark === "bg-green-500"
                                ? "text-green-600"
                                : plan.accentDark === "bg-blue-500"
                                  ? "text-blue-600"
                                  : "text-red-600"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-sm leading-tight text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <>
                        {plan.notIncluded.map((feature, featureIdx) => (
                          <motion.li
                            key={`not-${featureIdx}`}
                            variants={loadFeatures(plan.features.length + featureIdx)}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            className="flex items-start"
                          >
                            <div className="rounded-full bg-red-100 p-1 mr-2 mt-1 flex-shrink-0">
                              <svg
                                className="h-3 w-3 text-red-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                              </svg>
                            </div>
                            <span className="text-sm leading-tight text-muted-foreground">No incluye: {feature}</span>
                          </motion.li>
                        ))}
                      </>
                    )}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

