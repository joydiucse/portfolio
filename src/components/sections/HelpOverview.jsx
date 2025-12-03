import React from 'react'
import Container from '../../components/common/Container.jsx'

function HelpOverview() {
  return (
    <Container className="py-12" id="notes">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-3xl sm:text-4xl font-bold">What do I help?</h2>
        </div>
        <div className="lg:col-span-2 space-y-4 text-gray-700">
          <p>I will help you with framing a solution and solve your problems. We use process design to create digital products. Basics that also help their business.</p>
          <p>We use process design to create digital products. Basics that also help their business.</p>
        </div>
      </div>
    </Container>
  )
}

export default HelpOverview