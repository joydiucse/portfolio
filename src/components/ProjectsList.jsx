import { projects } from "../data/data"

export default function ProjectsList() {
  return (
    <section id="projects" className="space-y-10">
      {projects.map(p => (
        <article key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-medium text-white">{p.title}</h3>
            <span className="text-xs text-blue-200">{p.dates}</span>
          </div>
          <p className="mt-1 text-sm text-blue-200">{p.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack?.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-blue-100 border border-primary/30">{t}</span>
            ))}
          </div>
          <ul className="mt-3 space-y-2 text-sm text-blue-100/90">
            {p.bullets.map(b => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}