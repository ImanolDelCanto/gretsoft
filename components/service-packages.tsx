"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useMemo, useState } from "react"
import { Card, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, LayoutTemplate, ShoppingCart } from "lucide-react"  

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
      description: "Sitio web a medida, desarrollado para cubrir todos los requerimientos de tu negocio.",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      features: [
        "Desarrollo 100% personalizado enfocado en los objetivos de tu empresa",
        "Diseño visual clásico o moderno con animaciones fluidas",
        "Incluye 4 secciones (Inicio + 3). Se pueden añadir más con costo adicional",
        "Dominio y hosting premium incluidos por 12 meses",
        "Formulario de contacto conectado directamente a tu correo",
        "Alto rendimiento en carga y navegación",
        "Optimización básica para motores de búsqueda (SEO)",
        "Soporte técnico gratuito durante el primer mes",
        "Enlaces e iconos a redes sociales integrados",
        "Diseño responsivo para móviles, tablets y escritorio",
        "Botón flotante de contacto vía WhatsApp",
      ],
      notIncluded: ["No incluye sistema de gestión de contenido autoadministrable"],
      accentLight: "bg-green-100",
      accentDark: "bg-green-500",
    },
    {
      id: "landing",
      name: "Landing Page",
      description: "Una página única, optimizada para captar la atención de tus clientes y convertir.",
      icon: LayoutTemplate,
      color: "from-blue-500 to-indigo-500",
      features: [
        "Landing page enfocada en conversiones y diseñada a tu medida",
        "Diseño adaptado según el tipo de landing (captura de leads, venta directa, embudo, etc.)",
        "Estética profesional con posibilidad de incluir animaciones modernas",
        "Incluye dominio y alojamiento por un año completo",
        "Formulario de contacto personalizado según tus necesidades",
        "Rendimiento optimizado para una experiencia de usuario fluida",
        "Configurada con prácticas básicas de SEO para mejorar posicionamiento",
        "Soporte técnico sin costo durante 30 días posteriores a la entrega",
        "Integración con tus redes sociales principales",
        "Compatible con cualquier dispositivo móvil o de escritorio",
        "Botones flotantes para WhatsApp u otras redes sociales",
      ],
      notIncluded: ["Este servicio no incluye panel de autogestión de contenido"],
      accentLight: "bg-blue-100",
      accentDark: "bg-blue-500",
    },
    {
      id: "ecommerce",
      name: "Ecommerce",
      description: "Tienda online profesional diseñada a la medida de tu negocio para vender en línea.",
      icon: ShoppingCart,
      color: "from-purple-500 to-indigo-500",
      features: [
        "Plataforma de ecommerce personalizada con identidad visual única",
        "Diseño elegante o moderno, animaciones opcionales",
        "Carga inicial de hasta 20 productos al catálogo",
        "Integración con Mercado Pago para aceptar pagos en línea",
        "Incluye dominio y hosting por un año",
        "Optimización completa para velocidad y experiencia de usuario",
        "Soporte técnico y mantenimiento incluidos durante los primeros 2 meses",
        "Diseño adaptable a cualquier tipo de pantalla o dispositivo",
        "Botones flotantes para redes, carrito y WhatsApp",
        "Incluye panel de administración para autogestión de productos y pedidos",
      ],
      notIncluded: [],
      accentLight: "bg-purple-100",
      accentDark: "bg-purple-500",
    },
  ],
  [],
);


  return (
    <section
      id="packages-section"
      className="relative py-20 sm:py-24 bg-gradient-to-tr from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-700/30">
            Nuestros Paquetes
          </h2>
          <p className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r text-white h-24">
            Descubrí nuestros paquetes.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Ofrecemos paquetes diseñados para cubrir todas tus necesidades, desde sitios web corporativos
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