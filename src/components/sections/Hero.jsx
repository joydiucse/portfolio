import React from 'react'
import Container from '../../components/common/Container.jsx'

function Hero() {
  return (
    <div className="bg-white rounded-3xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-1 lg:order-none">
            <div className="space-y-4">
              <div className="text-sm font-semibold tracking-wide text-teal-700">Binjan</div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Hey There, I’m Binjan</h1>
              <p className="text-gray-600">I design beautifully simple things, and I love what I do.</p>
              <a href="mailto:joy.diu.cse@gmail.com" className="inline-block text-teal-700 font-medium">benjan1.08@gmail.com</a>
            </div>
          </div>
          <div className="lg:col-span-4 relative order-3 lg:order-none">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <svg viewBox="0 0 300 300" className="w-64 h-64 sm:w-80 sm:h-80" aria-hidden="true">
                <path d="M20 180c60-20 40-120 140-110 80 8 62 120 40 160-40 72-180-10-180-50z" fill="#0e766e" opacity="0.25"/>
                <path d="M50 200c40-30 50-90 120-90 60 0 60 80 40 120-30 60-160 20-160-30z" fill="#0e766e" opacity="0.4"/>
              </svg>
            </div>
            <img src="https://placehold.co/360x420/ffffff/000000" alt="Profile" className="mx-auto rounded-2xl ring-1 ring-gray-200"/>
          </div>
          <div className="lg:col-span-3 order-2 lg:order-none">
            <div className="space-y-6">
              <p className="text-gray-600">I design beautifully simple things. And I love what I do.</p>
              <div className="flex items-center gap-3">
                <div className="size-14 rounded-full border-2 border-gray-800 grid place-items-center text-xs font-bold">IDF</div>
                <div className="text-sm">
                  <div className="font-semibold">Certified</div>
                  <div className="text-gray-600">Professional UI/UX Designer</div>
                </div>
              </div>
              <div className="text-sm text-gray-900">
                <span className="font-bold">10</span> Years Experience
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero