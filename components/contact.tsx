"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { toast } from "@/hooks/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Te responderemos a la brevedad.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error('Error al enviar el mensaje')
      }
    }finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-muted/30">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white/50 to-blue-50/50 dark:from-gray-900/50 dark:via-gray-900/50 dark:to-gray-800/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-700/30">
            Contacto
          </h2>
          <p className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">¿Listo para comenzar tu proyecto?</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Contáctanos hoy mismo y conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-none shadow-lg bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>Completa el formulario y te responderemos a la brevedad.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Enviar mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="flex flex-col">
          <Card className="border-none shadow-lg bg-background/80 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
                <CardDescription>Estamos disponibles para ayudarte en todo lo que necesites.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-muted">
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                      <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:gretsoft@gmail.com"
                        className="mt-1 text-muted-foreground hover:text-purple-600 transition-colors"
                      >
                        gretsoft@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-muted">
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                      <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Teléfono</h4>
                      <a
                        href="tel:+12345678"
                        className="mt-1 text-muted-foreground hover:text-purple-600 transition-colors"
                      >
                        (+54) 11 2676-3301
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-muted">
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                      <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Dirección</h4>
                      <p className="mt-1 text-muted-foreground">
                        Banfield 
                        <br />
                        Buenos Aires, Argentina
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-muted">
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                      <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Horario</h4>
                      <p className="mt-1 text-muted-foreground">
                        Lunes a Viernes
                        <br />
                        8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20">
                  <h4 className="font-medium text-purple-700 dark:text-purple-300">Respuesta rápida garantizada</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Nos comprometemos a responder a todas las consultas en un plazo máximo de 24 horas hábiles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}