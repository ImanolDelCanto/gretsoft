"use client"
import Link from "next/link"

interface AnimatedButtonProps {
  text: string
  href: string
  className?: string
}

export function AnimatedButton({ text, href, className = "" }: AnimatedButtonProps) {
  return (
    <div className={`relative ${className}`}>
      <Link href={href} className="group">
        <button className="relative flex items-center justify-center w-full px-8 py-3 text-sm font-semibold text-white rounded-full overflow-hidden transition-all duration-700 ease-in-out hover:opacity-90 active:scale-95">
          {/* Fondo con gradiente que cubre todo el botón */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>

          {/* Círculo que se expande */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full opacity-0 transition-all duration-1000 ease-in-out group-hover:w-[250px] group-hover:h-[250px] group-hover:opacity-100"></div>

          {/* Flecha izquierda */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-5 h-5 fill-white z-10 transition-all duration-1000 ease-in-out left-[-25%] group-hover:left-4"
            viewBox="0 0 24 24"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>

          {/* Texto */}
          <span className="relative z-10 transform transition-transform duration-1000 ease-in-out -translate-x-3 group-hover:translate-x-3">
            {text}
          </span>

          {/* Flecha derecha */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-5 h-5 fill-white z-10 transition-all duration-1000 ease-in-out right-4 group-hover:right-[-25%]"
            viewBox="0 0 24 24"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </button>
      </Link>
    </div>
  )
}

