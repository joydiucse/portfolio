import React from 'react'
import Container from '../../components/common/Container.jsx'

const testimonials = [
  { name: 'John Allendale', role: 'Creative manager', quote: 'A complete search of the internet has found the most popular phrase on the web' },
  { name: 'Ava Thompson', role: 'Product lead', quote: 'I got a job that was in accordance with the story of the world' },
  { name: 'Michael Chen', role: 'CTO', quote: 'Clean design and fast delivery. Great collaboration throughout.' },
]

function Testimonials() {
  return (
    <Container className="py-12">
      <h3 className="text-2xl font-bold mb-6">People talk about us</h3>
      <div className="grid lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-2xl ring-1 ring-gray-200 p-6">
            <p className="text-gray-700">{t.quote}</p>
            <div className="mt-4 text-sm text-gray-600">{t.name} • {t.role}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Testimonials