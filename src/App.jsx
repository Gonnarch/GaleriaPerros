import { Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Home from "@/pages/Home"
import Entities from "@/pages/Entities"

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entities" element={<Entities />} />
        </Routes>
      </main>
    </div>
  )
}