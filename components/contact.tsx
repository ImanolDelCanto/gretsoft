"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react"
import { toast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "gretsoft@gmail.com",
    link: "mailto:gretsoft@gmail.com",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "(+54) 11 2676-3301",
    link: "tel:+5411-2676-3301",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    content: "GretSoft",
    link: "https://www.linkedin.com/company/gretsoft/",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Buenos Aires, Argentina",
    link: null,
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    [],
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
        if (response.ok) {
          toast({
            title: "Mensaje enviado",
            description: "Gracias por contactarnos. Te respondemos a la brevedad.",
          })
          setFormData({ name: "", email: "", subject: "", message: "" })
        } else {
          throw new Error("Error al enviar el mensaje")
        }
      } catch {
        toast({
          title: "No se pudo enviar",
          description: "Probá de nuevo o escribinos por WhatsApp.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData],
  )

  return (
    <section id="contacto" className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <div className="absolute inset-0 -z-10 bg-dots opacity-40" />
          <div className="absolute -top-32 right-0 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-[120px]" />

          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            {/* Info side */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">Contacto</span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Contanos tu idea. La hacemos realidad.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Respondemos toda consulta en un máximo de 24 horas hábiles.
                Sin compromiso — primero entendemos qué necesitás.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {contactInfo.map((item) => {
                  const inner = (
                    <>
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">
                          {item.title}
                        </p>
                        <p className="truncate text-sm font-medium">
                          {item.content}
                        </p>
                      </div>
                    </>
                  )
                  return item.link ? (
                    <a
                      key={item.title}
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="surface flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-primary/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={item.title}
                      className="surface flex items-center gap-3 rounded-xl p-4"
                    >
                      {inner}
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Form side */}
            <motion.form
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              onSubmit={handleSubmit}
              className="surface space-y-5 rounded-2xl p-7 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Contanos sobre tu proyecto..."
                  className="min-h-[130px]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                ¿Preferís un canal más directo?{" "}
                <a
                  href="https://wa.me/5491126763301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
                >
                  Escribinos por WhatsApp
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
