'use client'

import { BASE_URL } from "@/app/url"
import useSWR from "swr"

const fetcher = async () => {
  const response = await fetch(`${BASE_URL}/filteringResults`)
  return await response.json()
}

export default function FilteringPage() {
  const { data, error, isLoading } = useSWR('abstracts', fetcher, { revalidateOnFocus: false })

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <p className="text-lg animate-pulse">Cargando resultados...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <p className="text-red-400 text-lg">Ocurrió un error al visualizar los datos.</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-10">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-white">
          Estadísticas del filtrado de datos
        </h1>

        <p className="text-center text-gray-400">Resumen de artículos, autores, journals y más</p>

        {data &&
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card title="Cantidad de artículos">{data.articles}</Card>
          <Card title="Cantidad de journals">{data.journals}</Card>
          <Card title="Cantidad de keywords">{data.keywords}</Card>
          <Card title="Cantidad de autores">{data.authors}</Card>
          <Card title="Artículos repetidos">{data.reapeated}</Card>
        </div> 
        }
      </div>
    </main>
  )
}

// Reutilizable
function Card({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      <h2 className="text-lg font-semibold mb-2 text-gray-300 text-center">{title}</h2>
      <p className="text-3xl font-bold text-center text-white">{children}</p>
    </div>
  )
}
