import { education } from "../data/data"

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Education</h2>
      <div className="mt-6 space-y-6">
        {education.map((e) => (
          <div key={e.institution + e.degree} className="border rounded-lg p-4">
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="text-lg font-medium">{e.institution}</h3>
                <p className="text-gray-600">{e.location}</p>
              </div>
              <span className="text-sm text-gray-600">{e.dates}</span>
            </div>
            <p className="mt-2 text-sm text-gray-700">{e.degree}</p>
            <p className="text-sm text-gray-700">{e.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}