import { experience } from "../data/data"

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-6">
        {experience.map((exp) => (
          <div key={exp.title + exp.company} className="border rounded-lg p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg font-medium">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <div className="text-sm text-gray-600">{exp.dates}</div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{exp.location}</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {exp.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}