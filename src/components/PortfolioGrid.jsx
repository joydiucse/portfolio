import { portfolio } from "../data/data"

export default function PortfolioGrid() {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Explore my portfolio showcase</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map(item => (
            <article key={item.title} className="rounded-xl border bg-gray-50 overflow-hidden">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <div className="text-xs text-blue-700">{item.tag}</div>
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}