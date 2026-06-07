import { NavLink } from "react-router-dom"
import { Dog } from "lucide-react"

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/entities", label: "Entities" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-xl">
          <Dog className="h-6 w-6 text-primary" /> Dog Gallery
        </NavLink>
        <ul className="flex gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-md px-4 py-2 text-sm font-medium ${
                    isActive ? "bg-secondary" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}