import { Loader2, AlertTriangle } from "lucide-react"
import { useDogs } from "@/hooks/useDogs"

export default function Entities() {
  const { dogs, loading, error } = useDogs()
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-black">Entities</h1>
      <p className="mt-2 text-muted-foreground">Listado de perros.</p>
      {loading && <p className="mt-8 flex items-center gap-2 text-muted-foreground"><Loader2 className="h-5 w-5 animate-spin" /> Cargando…</p>}
      {error && <p className="mt-8 flex items-center gap-2 text-red-600"><AlertTriangle className="h-5 w-5" /> {error}</p>}
      {!loading && !error && (
        <ul className="mt-8 divide-y rounded-xl border bg-card">
          {dogs.map((dog) => {
            const b = dog.breeds?.[0]
            return (
              <li key={dog.id} className="flex items-center gap-4 p-4">
                <img src={dog.url} alt={b?.name ?? "Perro"} loading="lazy" className="h-16 w-16 shrink-0 rounded-lg object-cover" />
                <div>
                  <p className="text-lg font-semibold">{b?.name ?? "Raza desconocida"}</p>
                  <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-muted-foreground">
                    <span>🏷️ Grupo: {b?.breed_group ?? "N/D"}</span>
                    <span>⏳ Vida: {b?.life_span ?? "N/D"}</span>
                    <span>❤️ {b?.temperament ?? "N/D"}</span>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}