'use client'

import { BASE_URL } from "@/app/url"
import Image from "next/image"
import useSWR from "swr"

const fetcher = async () => {
  const response = await fetch(`${BASE_URL}/wordCounting`)
  return await response.json()
}

interface Item{
  name:string
  image:string
}

export default function WordCountingPage() {
  const { data, error, isLoading } = useSWR('words', fetcher, { revalidateOnFocus: false })

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
          Gráficos de Co-word network y wordcloud
        </h1>
    { data ?
      data.response.map((item:Item)=>{
        return (
          <section className="shadow-md rounded-2xl p-6 space-y-4" key={item.name}>
            <h2 className="text-xl font-semibold text-center">Gráfico para la nube {item.name}</h2>
            <div className="flex justify-center">
              <Image
                src={item.image}
                alt="Title Bar graph"
                className="rounded-lg border shadow-md max-w-full h-auto"
                width={800}
                height={800}
              />
            </div>
          </section>
        )
      })
      :
      <div className="flex justify-center items-center h-screen">
        <p className=" text-lg">Cargando resultados...</p>
      </div>
    }

      </div>
    </main>
  )

}
