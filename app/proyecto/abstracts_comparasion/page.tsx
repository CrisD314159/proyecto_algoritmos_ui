'use client'

import { BASE_URL } from "@/app/url"
import Image from "next/image"
import useSWR from "swr"

const fetcher = async () => {
  const response = await fetch(`${BASE_URL}/abstractComparasion`)
  return await response.json()
}

export default function AbstractsPage() {
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

  if(data){
    return (
      <main className="min-h-screenpy-10 px-4 md:px-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-3xl font-bold text-center">
            Comparación de Abstracts - Dendogramas
          </h1>
  
          <section className="shadow-md rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-center">Ward</h2>
            <div className="flex justify-center">
              <Image
                src={data.ward}
                alt="Dendograma Ward"
                className="rounded-lg border shadow-md max-w-full h-auto"
                width={800}
                height={800}
              />
            </div>
          </section>
  
          <section className=" shadow-md rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-center">Average</h2>
            <div className="flex justify-center">
              <Image
                src={data.average}
                alt="Dendograma Average"
                className="rounded-lg border shadow-md max-w-full h-auto"
                width={800}
                height={800}
              />
            </div>
          </section>
        </div>
      </main>
    )

  }
}
