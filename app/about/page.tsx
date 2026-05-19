import type { Metadata } from "next"
import { AboutPageClient } from "@/components/about-page-client"

export const metadata: Metadata = {
  title: "Nosotros | GretSoft",
  description:
    "Conocé a GretSoft: un estudio de desarrollo de software cercano, comprometido y enfocado en resolver problemas reales con tecnología.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return <AboutPageClient />
}
