import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Fundador",
    role: "Desarrollo Full Stack",
    image: "/",
    social: {
      linkedin: "https://www.linkedin.com/in/imanol-del-canto-10135024a/",
      github: "https://github.com/Imaagus",
    },
  }
]

export function AboutTeam() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className=" font-semibold leading-7 text-purple-600 dark:text-purple-400 text-4xl">Fundador</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Conoce quien esta detrás de GretSoft.
          </p>
        </div>
        <div className="flex justify-center">
          <ul
            role="list"
            className="mt-16 flex justify-center max-w-2xl"
          >
            {team.map((person) => (
              <Card key={person.name} className="relative group w-80">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      src={person.image || "/"}
                      alt={person.name}
                      width={400}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-center space-x-4">
                        <Link href={person.social.linkedin} className="text-white hover:text-purple-400" target="_blank">
                          <span className="sr-only">LinkedIn</span>
                          <Linkedin className="h-6 w-6" />
                        </Link>
                        <Link href={person.social.github} className="text-white hover:text-purple-400">
                          <span className="sr-only">GitHub</span>
                          <Github className="h-6 w-6" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold">{person.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

