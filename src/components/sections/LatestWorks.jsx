import React from 'react'
import Container from '../../components/common/Container.jsx'
import { portfolio } from '../../data/data.jsx'

function LatestWorks() {
  return (
    <Container className="py-12" id="works">
      <h3 className="text-2xl font-bold mb-6">My Latest Works</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((p) => (
          <div key={p.title} className="bg-white rounded-2xl ring-1 ring-gray-200 overflow-hidden">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <div className="font-semibold">{p.title}</div>
              <div className="text-xs text-gray-600">{p.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default LatestWorks