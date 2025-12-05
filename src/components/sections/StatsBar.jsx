import React from 'react'
import Container from '../../components/common/Container.jsx'

function StatsBar() {
  return (
    <Container className="py-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl ring-1 ring-gray-200 p-6 text-center">
          <div className="text-3xl font-bold">285+</div>
          <div className="text-sm text-gray-600">Project Completed</div>
        </div>
        <div className="bg-white rounded-2xl ring-1 ring-gray-200 p-6 text-center">
          <div className="text-3xl font-bold">190+</div>
          <div className="text-sm text-gray-600">Happy Clients</div>
        </div>
      </div>
    </Container>
  )
}

export default StatsBar