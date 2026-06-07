import { Ruler, Weight, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DogCard({ dog }) {
  const breed = dog.breeds?.[0]
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={dog.url} alt={breed?.name ?? "Perro"} loading="lazy"
          className="h-full w-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{breed?.name ?? "Raza desconocida"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2"><Weight className="h-4 w-4 text-primary" /> Peso: {breed?.weight?.metric ?? "?"} kg</p>
        <p className="flex items-center gap-2"><Ruler className="h-4 w-4 text-primary" /> Altura: {breed?.height?.metric ?? "?"} cm</p>
        <p className="flex items-start gap-2"><Heart className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {breed?.temperament ?? "N/D"}</p>
      </CardContent>
    </Card>
  )
}