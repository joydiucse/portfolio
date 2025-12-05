import React from 'react'
import Container from '../../components/common/Container.jsx'
import { experience } from '../../data/data.jsx'

function TimelineItem({ item, index }) {
  const colors = ['bg-primary', 'bg-secondary', 'bg-rose-600', 'bg-teal-600']
  const dotColor = colors[index % colors.length]
  return (
    <div className="grid grid-cols-[36px_1fr] sm:grid-cols-[1fr_64px_1fr] items-start gap-4">
      <div className="text-right pr-0 sm:pr-4 hidden sm:block">
        <div className="font-semibold">{item.company}</div>
        <div className="text-sm text-gray-600">{item.dates}</div>
      </div>
      <div className="fcc relative pl-1.5 sm:pl-0">
        <div className="size-6 rounded-full border-dashed border border-gray-400 dark:border-gray-500 bg-primary-xlight fcc">
          <div className={`size-3 rounded-full ${dotColor}`}></div>
        </div>
      </div>
      <div className="sm:pl-4">
        <div className="sm:hidden text-sm text-gray-600 dark:text-gray-400 font-semibold mb-1"><span className="font-medium">{item.company}</span></div>
        <div className="sm:hidden text-sm text-gray-600 dark:text-gray-400  mb-1">• {item.dates}</div>
        <div className="font-semibold">{item.title}</div>
        <p className="text-sm text-gray-700 dark:text-gray-500  mt-1">{item?.summary}</p>
      </div>
    </div>
  )
}

function ExperienceSection() {
  const items = experience.slice(0, 4)
  return (
    <div className={'bg-primary-xlight'}>
      <Container className="py-12" id="experience">
        <h3 className="text-2xl font-bold mb-8 sm:text-center">My Work Experience</h3>
        <div className="relative">
          <div className="absolute left-[20px] top-0 h-full border-l border-dashed border-gray-400 dark:border-gray-500 sm:hidden"></div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full border-l border-dashed border-gray-400 dark:border-gray-500 hidden sm:block"></div>
          <div className="space-y-8">
            {items.map((item, idx) => (
              <TimelineItem key={`${item.title}-${item.dates}`} item={item} index={idx} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ExperienceSection
