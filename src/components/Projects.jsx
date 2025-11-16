import { projects } from "../data/data"

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-lg border p-4 bg-gray-50">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <span className="text-sm text-gray-600">{p.dates}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white border">{t}</span>
                ))}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {p.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}