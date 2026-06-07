import { Ruler, ArrowLeftRight, ArrowUpDown, Hash } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DogCard({ dog }) {
  const orientacion =
    dog.width > dog.height ? "Horizontal" : dog.width < dog.height ? "Vertical" : "Cuadrada"
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={dog.url} alt={`Perro ${dog.id}`} loading="lazy"
          className="h-full w-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Hash className="h-4 w-4 text-primary" /> {dog.id}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-primary" /> Ancho: {dog.width} px</p>
        <p className="flex items-center gap-2"><ArrowUpDown className="h-4 w-4 text-primary" /> Alto: {dog.height} px</p>
        <p className="flex items-center gap-2"><Ruler className="h-4 w-4 text-primary" /> {orientacion}</p>
      </CardContent>
    </Card>
  )
}