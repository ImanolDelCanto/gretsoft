"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { LayoutTemplate, ShoppingCart, Globe, Smartphone, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"

export function Services() {
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

  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-700/30">
            Nuestros Servicios
          </h2>
          <p className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 h-24">
            Soluciones web completas para tu negocio
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ofrecemos una amplia gama de servicios web para ayudarte a establecer y hacer crecer tu presencia digital.
            Haz clic en cada servicio para obtener más información.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 overflow-hidden">
            {services.slice(0, 5).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9, rotate: index === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
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
        </div>
      </div>
    </section>
  )
}

export function ServicePackages() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Forzar la visibilidad en dispositivos móviles
    const checkVisibility = () => {
      // Detectar si es un dispositivo móvil por el ancho de la ventana
      const isMobile = window.innerWidth < 768

      if (isMobile) {
        // En móviles, establecer isVisible a true inmediatamente
        setIsVisible(true)
      } else {
        // En desktop, usar IntersectionObserver como antes
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true)
            }
          },
          {
            threshold: 0.3,
            rootMargin: "-100px 0px",
          },
        )

        const element = document.getElementById("packages-section")
        if (element) {
          observer.observe(element)
        }

        return () => {
          if (element) {
            observer.unobserve(element)
          }
        }
      }
    }

    // Ejecutar al montar y cuando cambie el tamaño de la ventana
    checkVisibility()
    window.addEventListener("resize", checkVisibility)

    return () => {
      window.removeEventListener("resize", checkVisibility)
    }
  }, [])

  const packages = useMemo(
    () => [
      {
        id: "web",
        name: "Página Web",
        description: "Totalmente personalizada y adaptada a las necesidades de tu negocio",
        icon: Globe,
        color: "from-green-500 to-emerald-500",
        features: [
          "Página web totalmente personalizada y adaptada a las necesidades de tu negocio",
          "Diseño tradicional/moderno con animaciones incluidas",
          "4 secciones, incluido el inicio (Costo adicional por más secciones)",
          "Hosting premium y Dominio por 1 año incluidos",
          "Formulario de contacto integrado",
          "Velocidad y rendimiento garantizado",
          "Optimización para motores de búsqueda (SEO)",
          "1 mes de soporte técnico / mantenimiento incluido",
          "Integración de redes sociales",
          "Página web adaptada a todos los dispositivos móviles",
          "Botón flotante de WhatsApp",
        ],
        notIncluded: ["No incluye panel autoadministrable"],
        accentLight: "bg-green-100",
        accentDark: "bg-green-500",
      },
      {
        id: "landing",
        name: "Landing Page",
        description: "Totalmente personalizada y adaptada a las necesidades de tu negocio",
        icon: LayoutTemplate,
        color: "from-blue-500 to-indigo-500",
        features: [
          "Landing page totalmente personalizada y adaptada a las necesidades de tu negocio",
          "Estructura adaptada al tipo de landing page que necesitas (Splash, Captura de leads, Embudos, etc)",
          "Diseño tradicional / moderno con animaciones incluidas",
          "Hosting y Dominio por 1 año incluidos",
          "Formulario de contacto integrado",
          "Velocidad y rendimiento garantizado",
          "Optimización para motores de búsqueda (SEO)",
          "1 mes de soporte técnico / mantenimiento incluido",
          "Integración de redes sociales",
          "Landing page adaptada a todos los dispositivos móviles",
          "Botones flotantes (redes sociales, whatsapp, etc)",
        ],
        notIncluded: ["No incluye panel autoadministrable"],
        accentLight: "bg-blue-100",
        accentDark: "bg-blue-500",
      },
      {
        id: "ecommerce",
        name: "Ecommerce",
        description: "Totalmente personalizado y adaptado a las necesidades de tu negocio",
        icon: ShoppingCart,
        color: "from-purple-500 to-indigo-500",
        features: [
          "Ecommerce totalmente personalizado y adaptado a las necesidades de tu negocio",
          "Diseño tradicional / moderno con animaciones incluidas",
          "Carga de hasta 20 productos",
          "Pasarela de pagos integrada (mercado pago)",
          "Hosting Dominio por 1 año incluidos",
          "Velocidad y rendimiento garantizado",
          "2 meses de soporte técnico / mantenimiento incluido",
          "Ecommerce adaptado a todos los dispositivos móviles",
          "Botones flotantes (redes sociales, whatsapp, carrito, etc)",
          "Panel autoadministrable incluido",
        ],
        notIncluded: [],
        accentLight: "bg-purple-100",
        accentDark: "bg-purple-500",
      },
    ],
    [],
  )

  return (
    <section
      id="packages-section"
      className="relative py-24 sm:py-32 bg-gradient-to-tr from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-700/30">
            Nuestros Paquetes
          </h2>
          <p className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 h-24">
            Soluciones completas para tu presencia digital
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ofrecemos paquetes diseñados para cubrir todas tus necesidades digitales, desde sitios web corporativos
            hasta tiendas en línea completas.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }} // Siempre visible inicialmente
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 px-4 sm:px-6 md:grid-cols-3"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 1, y: 0 }} // Siempre visible inicialmente
              animate={
                isVisible
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: index === 0 ? -50 : index === 1 ? 0 : 50, y: 50 }
              }
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <Card className="relative flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-8 bg-background/60 backdrop-blur-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold leading-8">
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${pkg.color}`}>{pkg.name}</span>
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{pkg.description}</p>
                </div>

                <div className="mt-2 flex-1">
                  <h4 className="font-medium mb-2">Incluye</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {pkg.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <div className={`rounded-full ${pkg.accentLight} p-1 mr-2 mt-1 flex-shrink-0`}>
                          <svg
                            className={`h-3 w-3 ${pkg.accentDark === "bg-green-500" ? "text-green-600" : pkg.accentDark === "bg-blue-500" ? "text-blue-600" : "text-purple-600"}`}
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
                    {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                      <>
                        {pkg.notIncluded.map((feature, featureIdx) => (
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
                            <span className="text-sm leading-tight text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </div>

                <CardFooter className="pt-6 px-0 flex justify-center">
                  <Link href={`https://wa.me/+5401126763301?text=Hola! Me gustaría obtener más información sobre el paquete ${pkg.name}.`} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-auto bg-gradient-to-r text-white "
                    style={{ backgroundImage: `linear-gradient(to right, ${pkg.color})` }}
                  >
                    Consultar al WhatsApp
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function ServicePlans() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px",
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
  }, [])

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

  return (
    <div
      id="plans-section"
      className="relative py-18 bg-gradient-to-tr from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 px-4 sm:px-6 md:grid-cols-3"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, x: index === 0 ? -50 : index === 1 ? 0 : 50, y: 50 }}
            animate={
              isVisible
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: index === 0 ? -50 : index === 1 ? 0 : 50, y: 50 }
            }
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          >
            <Card
              className={`relative flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-8 ${
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
    </div>
  )
}


