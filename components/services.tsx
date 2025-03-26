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

// Optimized version with animations preserved
export function Services() {
  const [mounted, setMounted] = useState(false)

  // Ensure hydration is complete before animations
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

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger time
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 }, // Reduced y distance
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100, // Lower stiffness for better performance
        damping: 15,
        mass: 0.8, // Lower mass for faster animation
      },
    },
  }

  return (
    <section id="services" className="relative py-24 sm:py-32 w-full">
      <div className="absolute inset-0 w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-700/30">
            Nuestros Servicios
          </h2>
          <p className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Soluciones web completas para tu negocio
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ofrecemos una amplia gama de servicios web para ayudarte a establecer y hacer crecer tu presencia digital.
            Haz clic en cada servicio para obtener más información.
          </p>
        </div>

        {mounted && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {services.slice(0, 5).map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  style={{ willChange: "transform, opacity" }} // Performance optimization
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="group relative overflow-hidden border-none bg-background/60 backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-2 cursor-pointer">
                        <div
                          className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"
                          style={{ backgroundImage: `linear-gradient(to right, ${service.gradient})` }}
                        />

                        <CardHeader>
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${service.gradient} shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}
                          >
                            <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </div>
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
                            <span className="transition-opacity duration-300">{service.title}</span>
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

  // Ensure hydration is complete before animations
  useEffect(() => {
    setMounted(true)
  }, [])

  // Optimized intersection observer
  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, disconnect the observer to save resources
          observer.disconnect()
        }
      },
      {
        threshold: 0.1, // Lower threshold for earlier detection
        rootMargin: "0px", // Simplified margin
      },
    )

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

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger time
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 }, // Reduced y distance
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100, // Lower stiffness for better performance
        damping: 15,
        mass: 0.8, // Lower mass for faster animation
      },
    },
  }

  return (
    <div
      id="plans-section"
      className="relative py-18 w-full overflow-hidden bg-gradient-to-tr from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-700/30 m-4">
          Planes de Mantenimiento
        </h2>
        <p className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 m-4">
          Mantén tu sitio web siempre actualizado
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground m-4">
          Ofrecemos diferentes planes opcionales de mantenimiento para asegurar que tu sitio web esté siempre
          funcionando de manera óptima.
        </p>
      </div>

      {mounted && isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 px-4 sm:px-6 md:grid-cols-3"
          style={{ willChange: "transform, opacity" }} // Performance optimization
        >
          {plans.map((plan, index) => (
            <motion.div key={plan.name} variants={itemVariants} custom={index}>
              <Card
                className={`relative flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "z-10 bg-background shadow-xl ring-1 ring-gray-900/10 dark:ring-gray-700/30"
                    : "bg-background/60 backdrop-blur-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-8">
                    <div className={`rounded-full ${plan.accent} px-3 py-1 text-sm font-semibold leading-6`}>
                      Más popular
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold leading-8">
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}>{plan.name}</span>
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{plan.description}</p>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  </div>
                </div>

                <div className="mt-2 flex-1">
                  <ul className="space-y-1 sm:space-y-2">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <div className={`rounded-full ${plan.accentLight} p-1 mr-2 mt-1 flex-shrink-0`}>
                          <svg
                            className={`h-3 w-3 ${plan.accentDark === "bg-green-500" ? "text-green-600" : plan.accentDark === "bg-blue-500" ? "text-blue-600" : "text-red-600"}`}
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
                      </li>
                    ))}
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <>
                        {plan.notIncluded.map((feature, featureIdx) => (
                          <li key={`not-${featureIdx}`} className="flex items-start">
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
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

