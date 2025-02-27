import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Sparkles, Zap } from "lucide-react"

const features = [
  { icon: Code, text: "Desarrollo a medida" },
  { icon: Zap, text: "Optimización de rendimiento" },
  { icon: Sparkles, text: "Diseño moderno" },
]

export function Hero() {
  return (
    <div id="home" className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-indigo-800 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex items-center gap-x-3 mb-8">
            <div className="rounded-full flex items-center gap-x-2 px-3 py-1 text-sm font-medium leading-6 text-primary-foreground bg-primary ring-1 ring-inset ring-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Soluciones Web Profesionales</span>
            </div>
          </div>

          <h1 className="max-w-lg text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Transformamos ideas en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              experiencias digitales
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Desarrollamos soluciones web profesionales y personalizadas para hacer crecer tu negocio. Desde landing
            pages hasta e-commerce, creamos experiencias digitales que destacan.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#contact">
                Comienza tu proyecto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto rounded-full border-primary/20 hover:bg-primary/5"
            >
              <Link href="/portfolio">Ver nuestro trabajo</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-x-2 text-sm">
                <div className="rounded-full bg-primary/10 p-1">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 blur-3xl opacity-30 rounded-full" />
          <Image
            src="/banner (2).jpg"
            alt="Dashboard preview"
            width={600}
            height={600}
            className="mx-auto w-full max-w-[22.875rem] sm:max-w-[28.875rem] rounded-xl shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 hover:scale-[1.02]"
            priority
            loading="eager"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  )
}

