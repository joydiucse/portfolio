import Button from "@mui/material/Button"

export default function FeatureHighlight() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="md:order-2">
          <img src="https://placehold.co/420x560/png" alt="device" className="rounded-2xl border shadow-sm" />
        </div>
        <div>
          <span className="text-sm text-blue-700">Case study</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Build amazing websites and landing pages with ease</h2>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Semantic, accessible, responsive layouts</li>
            <li>• Fast, secure, SEO-friendly pages</li>
            <li>• Component-driven, reusable UI systems</li>
            <li>• Analytics, a11y, and performance monitoring</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <Button variant="contained" href="#contact">Start a project</Button>
            <Button variant="outlined" href="#projects">View portfolio</Button>
          </div>
        </div>
      </div>
    </section>
  )
}