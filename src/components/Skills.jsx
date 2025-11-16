import { skills } from "../data/data"

export default function Skills() {
  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(s => (
            <div key={s.category} className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-medium">{s.category}</h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                {s.items.map(it => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}