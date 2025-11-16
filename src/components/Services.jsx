import { services } from "../data/data"

export default function Services() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Services specifically designed to meet your business needs</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="rounded-xl border bg-white p-6">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.description}</p>
              <div className="mt-4 text-blue-700 font-semibold">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}