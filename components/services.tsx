"use client"

import { LayoutTemplate, ShoppingCart, Globe, Smartphone, Search, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const services = [
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
  {
    title: "Analytics",
    description: "Implementación de análisis y métricas para tomar mejores decisiones.",
    icon: BarChart,
    gradient: "from-red-500 to-pink-500",
    details:
      "Implementamos herramientas de análisis avanzadas para ayudarte a entender el comportamiento de tus usuarios y el rendimiento de tu sitio web. Configuramos paneles personalizados, seguimiento de eventos, embudos de conversión y más. Con estos datos, podrás tomar decisiones informadas para mejorar tu estrategia digital y aumentar tus conversiones.",
  },
]

export function Services() {

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

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

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Dialog key={service.title}>
                <DialogTrigger asChild>
                  <Card className="group relative overflow-hidden border-none bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

