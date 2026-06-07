import { useEffect, useState } from "react"

const API_URL = "https://api.thedogapi.com/v1/images/search?limit=10"

export function useDogs() {
  const [dogs, setDogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`)
        return res.json()
      })
      .then((data) => setDogs(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { dogs, loading, error }
}