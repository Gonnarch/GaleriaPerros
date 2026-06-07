import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h1 className="text-5xl font-black tracking-tight">Dog Gallery Challenge 🐶</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
        Aplicación en React que consume una API pública y muestra una galería de
        imágenes de perros en tiempo real.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link to="/entities">
          Ver entidades <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </section>
  )
}