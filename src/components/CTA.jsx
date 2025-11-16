import Button from "@mui/material/Button"

export default function CTA() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <img src="https://placehold.co/800x180/png" alt="illustration" className="mx-auto rounded-xl border" />
        <h2 className="mt-6 text-2xl font-semibold">Accelerate your growth with a production-grade stack</h2>
        <p className="mt-2 text-gray-700">I build robust systems with performance, security, and scalability in mind.</p>
        <div className="mt-6">
          <Button variant="contained" href="#contact">Get started</Button>
        </div>
      </div>
    </section>
  )
}