import { Loader2, AlertTriangle } from "lucide-react"
import { useDogs } from "@/hooks/useDogs"

export default function Entities() {
  const { dogs, loading, error } = useDogs()
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-black">Entities</h1>
      <p className="mt-2 text-muted-foreground">Listado de la entidad Dog con sus propiedades: id, ancho y alto.</p>
      {loading && <p className="mt-8 flex items-center gap-2 text-muted-foreground"><Loader2 className="h-5 w-5 animate-spin" /> Cargando…</p>}
      {error && <p className="mt-8 flex items-center gap-2 text-red-600"><AlertTriangle className="h-5 w-5" /> {error}</p>}
      {!loading && !error && (
        <ul className="mt-8 divide-y rounded-xl border bg-card">
          {dogs.map((dog) => (
            <li key={dog.id} className="flex items-center gap-4 p-4">
              <img src={dog.url} alt={`Perro ${dog.id}`} loading="lazy" className="h-16 w-16 shrink-0 rounded-lg object-cover" />
              <div className="flex flex-wrap gap-x-6 text-sm">
                <span className="font-semibold">🆔 {dog.id}</span>
                <span className="text-muted-foreground">↔️ Ancho: {dog.width} px</span>
                <span className="text-muted-foreground">↕️ Alto: {dog.height} px</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}