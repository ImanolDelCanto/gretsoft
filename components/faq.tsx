"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "¿Cuánto tiempo toma desarrollar mi proyecto?",
    answer:
      "Depende de la complejidad. Una landing page puede estar lista en menos de una semana; un e-commerce o una aplicación web suele tomar entre 1 y 4 semanas. En la consulta inicial te damos un cronograma concreto según tus requerimientos.",
  },
  {
    question: "¿Cuáles son sus tarifas?",
    answer:
      "Cada proyecto se cotiza según su alcance. Trabajamos con presupuestos a medida y accesibles. La cotización es gratuita y sin compromiso: evaluamos lo que necesitás y te pasamos un presupuesto detallado por escrito.",
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer:
      "Sí. Incluimos soporte gratuito durante las primeras semanas y ofrecemos planes de mantenimiento continuo: actualizaciones, monitoreo de seguridad y mejoras. También damos soporte a proyectos que ya están en marcha.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Empezamos con una consulta para entender tus objetivos. Luego definimos alcance, tiempos y presupuesto por escrito. Aprobado eso, pasamos a diseño y desarrollo con avances visibles, y finalmente lanzamos y te capacitamos. Mantenemos comunicación constante en todo el proceso.",
  },
  {
    question: "¿El sistema será autoadministrable?",
    answer:
      "Según lo que necesites. Podemos desarrollar paneles de autogestión para que actualices contenido o productos sin conocimientos técnicos, o encargarnos nosotros del mantenimiento. Lo definimos juntos en la propuesta.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="eyebrow">Dudas frecuentes</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Resolvemos lo que te estás preguntando.
            </h2>
            <p className="mt-5 text-muted-foreground">
              ¿No encontrás tu respuesta?{" "}
              <a
                href="#contacto"
                className="font-semibold text-primary hover:underline"
              >
                Escribinos directamente
              </a>{" "}
              y te respondemos a la brevedad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:text-primary hover:no-underline sm:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
