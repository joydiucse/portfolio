import React from 'react'
import Container from '../../components/common/Container.jsx'
import { ReactIcon } from '../common/ReactIcon.jsx'
import {skills} from "../../data/data.jsx";

function Skills() {
  const iconRemap = { js: 'javascript', ts: 'typescript', postgres: 'postgresql', k8s: 'kubernetes' }
  const steps = (skills || []).slice(0, 5).map((cat, i) => {
    const iconKey = cat.items?.[0]?.icon || 'info'
    const icon = iconRemap[iconKey] || iconKey
    const title = cat.category
    const desc = (cat.items || [])?.map(s => s.title).join(', ')
    return { number: i + 1, title, icon, desc }
  })

  return (
    <div>
      <Container className="py-16" id="skills">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold">Skills & Expertise</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Tools and technologies I use to build efficient and scalable digital solutions.</p>
        </div>
        <div className="flex flex-wrap  relative items-start sm:justify-center gap-8 sm:gap-12">
          {skills.map((item, idx) => (
            <div key={idx} className="relative text-center flex sm:flex-col items-start sm:items-center justify-start sm:justify-center gap-6 sm:gap-2">
              <div className="fcc pt-3 sm:pt-0">
                <div className="relative">
                  <div className="size-24 sm:size-20 rounded-full bg-secondary fcc shadow-md transition-transform hover:scale-110">
                    <ReactIcon name={item.icon} className="text-3xl text-white" />
                  </div>
                  <div className="absolute inset-[-8px] rounded-full border border-dashed border-gray-400"></div>
                </div>
              </div>
              <div className="">
                <div className="sm:mt-3 font-semibold text-left sm:text-center">{item?.category}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-0 text-left sm:text-center max-w-[180px]">
                  {item?.items?.map((subItem, ids)=>(
                      <p key={ids}>{subItem?.title}</p>
                  ))}
                </div>
              </div>


            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Skills
