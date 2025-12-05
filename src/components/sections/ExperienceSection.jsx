import React from 'react'
import Container from '../../components/common/Container.jsx'
import { experience } from '../../data/data.jsx'

function ExperienceCard({ item }) {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-gray-200 p-6">
      <div className="font-semibold">{item.title}</div>
      <div className="text-sm text-gray-600">{item.company} • {item.dates}</div>
      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {item.bullets.slice(0, 3).map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    </div>
  )
}

function ExperienceSection() {
  return (
      <div className={'bg-primary-xlight'}>
          <Container className="py-12" id="experience">
              <h3 className="text-2xl font-bold mb-6 text-center">My Work Experience</h3>
              <div className="grid lg:grid-cols-2 gap-6">
                  {experience.slice(0, 4).map((item) => (
                      <ExperienceCard key={`${item.title}-${item.dates}`} item={item} />
                  ))}
              </div>
          </Container>
      </div>

  )
}

export default ExperienceSection