"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Smartphone, Monitor, MousePointerClick } from "lucide-react"

type MockupType = "landing" | "ecommerce" | "corporate" | "app"
type DeviceType = "desktop" | "mobile"

interface Mockup {
  id: string
  title: string
  description: string
  type: MockupType
  url: string
  image: {
    desktop: string
    mobile?: string
    tablet?: string
  }
  features: string[]
}

export function WebsiteMockups() {
  const [activeDevice, setActiveDevice] = useState<DeviceType>("desktop")

  const mockups: Mockup[] = [
    {
      id: "landing-1",
      title: "Boceto Landing Page",
      description:
        "Página de aterrizaje para promoción de tu negocio y posibildiad de contacto, con un diseño moderno y atractivo.",
      type: "landing",
      url: "https://bocetolandingpage1.vercel.app/",
      image: {
        desktop: "/media/bocetolanding (1).png",
        mobile: "/media/mobilelanding.png",
      },
      features: [
        "Animaciones suaves",
        "Diseño responsivo",
        "Llamados a la acción estratégicos",
        "Formulario de contacto",
      ],
    },
    {
      id: "landing-2",
      title: "Boceto Landing page 2",
      description:
        "Página de aterrizaje para promoción de tu negocio y posibildiad de contacto con un diseño sencillo y simple",
      type: "landing",
      url: "https://bocetolandingpage2.vercel.app/",
      image: {
        desktop: "/media/bocetolanding (2).png",
        mobile: "/media/mobilelanding2.png",
      },
      features: ["Animaciones suaves", "Formulario de contacto", "Diseño minimalista"],
    },
  ]

  // Group mockups by type
  const mockupsByType: Record<MockupType, Mockup[]> = {
    landing: mockups.filter((m) => m.type === "landing"),
    ecommerce: mockups.filter((m) => m.type === "ecommerce"),
    corporate: mockups.filter((m) => m.type === "corporate"),
    app: mockups.filter((m) => m.type === "app"),
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="mockups" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_400px,var(--primary-rgb,0,229,201)_0.1,transparent_80%)] dark:opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_80%_700px,var(--purple-rgb,147,51,234)_0.1,transparent_80%)] dark:opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium gradient-border"
          >
            <div className="rounded-full px-3 py-1 text-sm font-medium">
              <span className="text-primary text-glow">Explora Nuestros Diseños en Acción</span>
            </div>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
          >
            Bocetos Interactivos
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-muted-foreground">
            Interactúa con ejemplos reales de como podria verse tu sitio web y descubre cómo podemos transformar tu
            presencia digital. Si te gusta un boceto pero queres modificarlo no dudes en decirnos!
          </motion.p>
        </motion.div>

        {/* Device selector */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center rounded-full p-1 bg-muted">
            <Button
              variant={activeDevice === "desktop" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveDevice("desktop")}
              className="rounded-full flex items-center gap-2"
            >
              <Monitor className="h-4 w-4" />
              <span className="hidden sm:inline">Desktop</span>
            </Button>
            <Button
              variant={activeDevice === "mobile" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveDevice("mobile")}
              className="rounded-full flex items-center gap-2"
            >
              <Smartphone className="h-4 w-4" />
              <span className="hidden sm:inline">Mobile</span>
            </Button>
          </div>
        </motion.div>

        {/* Mockups tabs by type */}
        <Tabs defaultValue="landing" className="w-full">
          <div className="w-full overflow-x-auto pb-2 no-scrollbar">
            <TabsList className="flex justify-center mb-6 sm:mb-10 bg-muted/50 p-1 rounded-full min-w-max mx-auto">
              <TabsTrigger
                value="landing"
                className="rounded-full text-xs sm:text-sm py-1 px-2 sm:px-3 min-w-[80px] sm:min-w-0"
              >
                Landing
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="rounded-full text-xs sm:text-sm py-1 px-2 sm:px-3 min-w-[80px] sm:min-w-0"
              >
                E-commerce
              </TabsTrigger>
              <TabsTrigger
                value="corporate"
                className="rounded-full text-xs sm:text-sm py-1 px-2 sm:px-3 min-w-[80px] sm:min-w-0"
              >
                Corporativos
              </TabsTrigger>
              <TabsTrigger
                value="app"
                className="rounded-full text-xs sm:text-sm py-1 px-2 sm:px-3 min-w-[80px] sm:min-w-0"
              >
                Apps
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Content for each tab */}
          {(["landing", "ecommerce", "corporate", "app"] as const).map((type) => (
            <TabsContent key={type} value={type} className="mt-6">
              {mockupsByType[type].length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10 lg:grid-cols-2">
                  {mockupsByType[type].map((mockup) => (
                    <motion.div
                      key={mockup.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col"
                    >
                      {/* Device frame */}
                      <div className="relative group">
                        <div className="relative overflow-hidden rounded-lg bg-muted/30 border border-border shadow-xl">
                          {/* Device frame styling based on active device */}
                          <div
                            className={`
                            ${
                              activeDevice === "desktop"
                                ? "aspect-[16/9] p-2 sm:p-4"
                                : activeDevice === "mobile"
                                  ? "aspect-[4/3] p-2 sm:p-3 mx-auto max-w-[60%] sm:max-w-[80%]"
                                  : "aspect-[9/16] p-1 sm:p-2 mx-auto max-w-[30%] sm:max-w-[40%]"
                            }
                            relative overflow-hidden rounded-md bg-background
                          `}
                          >
                            {/* Browser chrome for desktop */}
                            {activeDevice === "desktop" && (
                              <div className="absolute top-0 left-0 right-0 h-6 bg-muted flex items-center px-2 z-10 rounded-t-md">
                                <div className="flex space-x-1.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                </div>
                                <div className="mx-auto text-xs text-muted-foreground truncate max-w-[200px]">
                                  {mockup.url}
                                </div>
                              </div>
                            )}

                            {/* Mobile notch for mobile */}
                            {activeDevice === "mobile" && (
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-muted rounded-b-xl z-10"></div>
                            )}

                            {/* Image container with proper padding for browser chrome */}
                            <div
                              className={`
                              ${activeDevice === "desktop" ? "pt-6" : ""}
                              h-full w-full overflow-hidden relative
                            `}
                            >
                              <Image
                                src={mockup.image[activeDevice] || mockup.image.desktop}
                                alt={mockup.title}
                                fill
                                className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                              />

                              {/* Interactive overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <div className="animate-bounce absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  <MousePointerClick className="h-8 w-8 text-white" />
                                </div>
                                <Link href={mockup.url} target="_blank" rel="noopener noreferrer">
                                  <Button variant="default" className="w-full mt-2 bg-primary hover:bg-primary/90">
                                    Visitar Sitio
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mockup details */}
                      <Card className="mt-6 border-none bg-background/40 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-foreground">{mockup.title}</h3>
                          <p className="mt-2 text-muted-foreground">{mockup.description}</p>

                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                              <h4 className="text-sm font-medium text-primary">Características</h4>
                              <ul className="mt-2 space-y-1">
                                {mockup.features.map((feature, index) => (
                                  <li key={index} className="text-sm text-muted-foreground flex items-center">
                                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">
                    No hay bocetos disponibles en esta categoría actualmente. Proximamente vas a encontrar!
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

