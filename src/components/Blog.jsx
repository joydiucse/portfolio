import { blog } from "../data/data"

export default function Blog() {
  return (
    <section id="blog" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Latest blog & news</h2>
          <a href="#" className="text-sm text-blue-700">View all</a>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {blog.map(post => (
            <article key={post.title} className="rounded-xl border bg-gray-50 overflow-hidden">
              <img src={post.image} alt={post.title} className="h-36 w-full object-cover" />
              <div className="p-4">
                <div className="text-xs text-blue-700">{post.tag}</div>
                <h3 className="text-base font-medium">{post.title}</h3>
                <div className="text-xs text-gray-600 mt-1">{post.date}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}