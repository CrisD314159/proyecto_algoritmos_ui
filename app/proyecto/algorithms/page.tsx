'use client'

import { BASE_URL } from "@/app/url"
import Image from "next/image"
import useSWR from "swr"

const fetcher = async () => {
  const response = await fetch(`${BASE_URL}/algorithmsExecution`)
  return await response.json()
}

export default function AlgorithmsPage() {
  const { data, error, isLoading } = useSWR('abstracts', fetcher, { revalidateOnFocus: false })

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
      {data &&
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-center">
          Ejecución de algoritmos de ordenamiento - Gráficas de barras
        </h1>

        <section className="shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center">Gráfica de barras para el la variable Title</h2>
          <div className="flex justify-center">
            <Image
              src={data.title}
              alt="Title Bar graph"
              className="rounded-lg border shadow-md max-w-full h-auto"
              width={800}
              height={800}
            />
          </div>
        </section>

        <section className=" shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center">Gráfica de barras para el la variable Author</h2>
          <div className="flex justify-center">
            <Image
              src={data.author}
              alt="Author Bar graph"
              className="rounded-lg border shadow-md max-w-full h-auto"
              width={800}
              height={800}
            />
          </div>
        </section>

        <section className=" shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center">Gráfica de barras para el la variable Journal</h2>
          <div className="flex justify-center">
            <Image
              src={data.journal}
              alt="Journal Bar graph"
              className="rounded-lg border shadow-md max-w-full h-auto"
              width={800}
              height={800}
            />
          </div>
        </section>

        <section className=" shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center">Gráfica de barras para el la variable Keywords</h2>
          <div className="flex justify-center">
            <Image
              src={data.keywords}
              alt="Keywords Bar graph"
              className="rounded-lg border shadow-md max-w-full h-auto"
              width={800}
              height={800}
            />
          </div>
        </section>
      </div>
      }
    </main>
  )
}
