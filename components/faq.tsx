"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
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

    const element = document.getElementById("faq-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const faqItems = [
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer:
        "El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page simple puede estar lista en 1 semana o menos, mientras que un e-commerce completo o una aplicación web puede tomar de 1 a 3 semanas. Durante nuestra consulta inicial, te proporcionaremos un cronograma detallado basado en tus requisitos específicos.",
    },
    {
      question: "¿Cuáles son sus tarifas?",
      answer:
        "Nuestras tarifas varían según el alcance y la complejidad del proyecto. Ofrecemos soluciones personalizadas que se adaptan a diferentes presupuestos. Contáctanos para una cotización gratuita donde evaluaremos tus necesidades específicas y te proporcionaremos un presupuesto detallado sin compromiso.",
    },
    {
      question: "¿Ofrecen mantenimiento después de lanzar el sitio?",
      answer:
        "Sí, ofrecemos varios planes de mantenimiento para asegurar que tu sitio web permanezca actualizado, seguro y funcionando de manera óptima. Nuestros planes incluyen actualizaciones regulares, monitoreo de seguridad y soporte técnico. Puedes ver más detalles en nuestra sección de Planes de Mantenimiento.",
    },
    {
      question: "¿Cómo es el proceso de trabajo para un nuevo proyecto?",
      answer:
        "Nuestro proceso comienza con una consulta inicial para entender tus objetivos y requisitos. Luego, desarrollamos un plan detallado y un presupuesto. Una vez aprobado, pasamos a la fase de diseño, seguida del desarrollo y pruebas. Finalmente, lanzamos tu sitio y proporcionamos capacitación para que puedas administrarlo. Durante todo el proceso, mantenemos una comunicación constante para asegurar que el resultado final cumpla con tus expectativas.",
    },
    {
      question: "¿Pueden ayudarme con el contenido de mi sitio web?",
      answer:
        "Sí, ofrecemos servicios de creación de contenido que incluyen redacción de textos, optimización SEO, y selección de imágenes. Trabajamos contigo para desarrollar contenido que refleje la voz de tu marca y atraiga a tu público objetivo. También podemos guiarte sobre cómo crear y mantener tu propio contenido si prefieres hacerlo tú mismo.",
    },
    {
      question: "¿Qué nivel de personalización puedo tener en el diseño?",
      answer:
        "Nos enfocamos en crear sitios web a medida, adaptándonos completamente a la identidad de tu negocio. Desde los colores, tipografías y estructura, hasta funcionalidades específicas como formularios personalizados o efectos visuales. Si tenes una idea clara, la hacemos realidad; si no, te guiamos para diseñar algo que represente tu marca y sea funcional para tus clientes.",
    },
    {
      question: " ¿El sitio web será autoadministrable o necesitaré ayuda para actualizarlo?",
      answer:
        "Depende de lo que necesites. Podemos desarrollar un sitio autoadministrable, donde puedas modificar tus productos fácilmente sin conocimientos técnicos. También ofrecemos planes de mantenimiento en caso de que prefieras delegar las actualizaciones y asegurarte de que todo funcione correctamente sin preocuparte por la parte técnica.",
    },
    {
      question: "¿Trabajan con clientes internacionales?",
      answer:
        "Absolutamente. Gracias a las herramientas digitales de comunicación, podemos trabajar eficientemente con clientes de cualquier parte del mundo. Utilizamos plataformas como Zoom, Google Meet y Slack para mantener una comunicación fluida, y adaptamos nuestros horarios para acomodar diferentes zonas horarias cuando es necesario.",
    },
    {
      question: "¿Qué información necesitan para comenzar mi proyecto?",
      answer:
        "Para comenzar, necesitamos entender tus objetivos comerciales, tu público objetivo, y tus preferencias de diseño. Es útil si puedes proporcionar ejemplos de sitios web que te gusten, así como cualquier material de marca existente (logo, colores, etc.). Durante nuestra consulta inicial, te guiaremos a través de todas las preguntas relevantes para asegurarnos de capturar toda la información necesaria.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section id="faq-section" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-700/30"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Resolvemos tus dudas
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios de desarrollo web. Si
            tienes alguna otra duda, no dudes en contactarnos.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mx-auto mt-16 max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-xl bg-background/80 backdrop-blur-sm shadow-lg border border-border/50 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-border/50 last:border-0"
                  >
                    <AccordionTrigger className="text-left font-medium py-4 hover:text-primary transition-colors">
                      <div className="flex items-start">
                        <HelpCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pl-7">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              ¿No encuentras la respuesta que buscas?{" "}
              <a href="#contact" className="text-primary hover:underline font-medium">
                Contáctanos directamente
              </a>{" "}
              y te responderemos a la brevedad.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

