import React from 'react'
import Container from '../../components/common/Container.jsx'
import { FiMonitor, FiSmartphone, FiLayers } from 'react-icons/fi'

const items = [
  { icon: FiMonitor, title: 'Website Design', count: '76 Projects', color: 'bg-teal-700' },
  { icon: FiSmartphone, title: 'Mobile App Design', count: '63 Projects', color: 'bg-amber-500' },
  { icon: FiLayers, title: 'Brand Identity', count: '47 Projects', color: 'bg-rose-600' },
]

function ServicesList() {
  return (
    <Container className="py-10" id="services">
      <div className="grid sm:grid-cols-3 gap-6">
        {items.map(({ icon, title, count, color }) => (
          <div key={title} className="flex items-center gap-4 bg-white rounded-2xl ring-1 ring-gray-200 p-5">
            <div className={`size-12 rounded-full grid place-items-center text-white ${color}`}>
              {React.createElement(icon)}
            </div>
            <div>
              <div className="font-semibold">{title}</div>
              <div className="text-sm text-gray-600">{count}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default ServicesList
