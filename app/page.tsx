// app/page.tsx
import Link from "next/link";

export default function Home() {
  const sections = [
    {
      href: "/proyecto/algorithms",
      title: "Visualización de algoritmos de ordenamiento",
      description:
        "Comparación del tiempo de ejecución de distintos algoritmos de ordenamiento.",
      requirement: "Requerimiento 1",
    },
    {
      href: "/proyecto/statistics",
      title: "Estadísticas encontradas",
      description:
        "Visualización de estadísticas como los autores o journals más comunes.",
      requirement: "Requerimiento 2",
    },
    {
      href: "/proyecto/word_counting",
      title: "Co-word network y Wordcloud",
      description:
        "Visualización del grafo de co-palabras y nubes de palabras.",
      requirement: "Requerimiento 3",
    },
    {
      href: "/proyecto/abstracts_comparasion",
      title: "Comparación de abstracts",
      description:
        "Comparación de abstracts mediante algoritmos de agrupamiento jerárquico.",
      requirement: "Requerimiento 5",
    },
    {
      href: "/proyecto/filtering_results",
      title: "Estadísticas de filtrado",
      description:
        "Visualización de estadísticas como cantidad de artículos o autores.",
      requirement: "Requerimiento adicional",
    },
  ];

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">
          Visualización de resultados del proyecto final de análisis de algoritmos
        </h1>
        <h2 className="text-lg mb-10">
          Cristian David Vargas - Allison Hincapié Ramírez
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sections.map((section, id) => (
            <Link key={id} href={section.href}>
              <div className="shadow hover:shadow-lg transition rounded-2xl p-6 cursor-pointer border border-gray-100 hover:border-blue-400">
                <h3 className="text-xl font-semibold mb-2">
                  {section.title}
                </h3>
                <p className=" mb-2">{section.description}</p>
                <p className="text-sm text-blue-500 mb-4">{section.requirement}</p>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Ir
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
