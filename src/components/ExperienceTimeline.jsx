import { experience } from "../data/data"

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="space-y-10">
      {experience.map(exp => (
        <div key={exp.title + exp.company} className="grid group">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-medium text-white">{exp.title}</h3>
            <span className="text-xs text-blue-200">{exp.dates}</span>
          </div>
          <div className="text-sm text-blue-200">{exp.company}</div>
          <ul className="mt-3 space-y-2 text-sm text-blue-100/90">
            {exp.bullets.map(b => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
