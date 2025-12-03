import React from 'react'
import Container from '../../components/common/Container.jsx'

function CTASection() {
  return (
    <Container className="py-16">
      <div className="bg-white rounded-3xl ring-1 ring-gray-200 p-10 text-center">
        <div className="text-2xl sm:text-3xl font-bold">Let’s make something amazing together.</div>
        <p className="mt-3 text-gray-700">Start by saying <a href="mailto:joy.diu.cse@gmail.com" className="text-teal-700 font-semibold">hi</a></p>
      </div>
    </Container>
  )
}

export default CTASection