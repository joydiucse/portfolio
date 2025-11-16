import { blog } from "../data/data"

export default function Writings() {
  return (
    <section id="writings" className="space-y-8">
      {blog.map(post => (
        <article key={post.title} className="flex items-center gap-4">
          <img src={post.image} alt={post.title} className="h-16 w-24 rounded-md border border-white/10 object-cover" />
          <div>
            <div className="text-xs text-blue-200">{post.date}</div>
            <h3 className="text-base font-medium text-white">{post.title}</h3>
            <div className="text-xs text-blue-200">{post.tag}</div>
          </div>
        </article>
      ))}
    </section>
  )
}