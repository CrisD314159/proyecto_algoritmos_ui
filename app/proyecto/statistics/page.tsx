'use client'

import { BASE_URL } from "@/app/url"
import Image from "next/image"
import useSWR from "swr"

const fetcher = async () => {
  const response = await fetch(`${BASE_URL}/articlesStatistics`)
  return await response.json()
}

export default function StatisticsPage() {
  const { data, error, isLoading } = useSWR('statistics', fetcher, { revalidateOnFocus: false })

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className=" text-lg">Cargando resultados...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg">Ocurrió un error al visualizar los datos.</p>
      </div>
    )
  }


  return (
    <main className="min-h-screenpy-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-center">
          Estadísticas de los articulos recopilados- Gráficas de barras
        </h1>

      {data ?
      <div className="w-full h-full">
        <section className="shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center">Gráfica de los 15 autores con más apariciones</h2>
          <div className="flex justify-center">
            <Image
              src={data.authors}
              alt="Title Bar graph"
              className="rounded-lg border shadow-md max-w-full h-auto"
              width={800}
              height={800}
            />
          </div>
        </section>

        <section className=" shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center">Gráfica de la cantidad de articulos por tipo</h2>
          <div className="flex justify-center">
            <Image
              src={data.cantidad_tipo}
              alt="Author Bar graph"
              className="rounded-lg border shadow-md max-w-full h-auto"
              width={800}
              height={800}
            />
          </div>
        </section>

        <section className=" shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center">Gráfica de las 15 Journals con más apariciones</h2>
          <div className="flex justify-center">
            <Image
              src={data.journals}
              alt="Journal Bar graph"
              className="rounded-lg border shadow-md max-w-full h-auto"
              width={800}
              height={800}
            />
          </div>
        </section>

        <section className=" shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center">Gráfica con la cantidad de articulos por año</h2>
          <div className="flex justify-center">
            <Image
              src={data.anio}
              alt="Keywords Bar graph"
              className="rounded-lg border shadow-md max-w-full h-auto"
              width={800}
              height={800}
            />
          </div>
        </section>

      </div>
      :
      <div className="flex justify-center items-center h-screen">
        <p className=" text-lg">Cargando resultados...</p>
      </div>
      
      
      }
      </div>
    </main>
  )
}
