import { Loader2, AlertTriangle } from "lucide-react"
import Hero from "@/components/Hero"
import DogCard from "@/components/DogCard"
import { useDogs } from "@/hooks/useDogs"

export default function Home() {
  const { dogs, loading, error } = useDogs()
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="mb-6 text-3xl font-bold">Galería</h2>
        {loading && <p className="flex items-center gap-2 text-muted-foreground"><Loader2 className="h-5 w-5 animate-spin" /> Cargando…</p>}
        {error && <p className="flex items-center gap-2 text-red-600"><AlertTriangle className="h-5 w-5" /> {error}</p>}
        {!loading && !error && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dogs.map((dog) => <DogCard key={dog.id} dog={dog} />)}
          </div>
        )}
      </section>
    </>
  )
}