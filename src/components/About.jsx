import { summary } from "../data/data"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">{summary}</p>
    </section>
  )
}