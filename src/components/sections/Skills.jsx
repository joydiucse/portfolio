import React from 'react'
import Container from '../../components/common/Container.jsx'
import { ReactIcon } from '../common/Icons.jsx'
import {skills} from "../../data/data.jsx";

const skillIcons = [
  { key: 'javascript', label: 'JavaScript' },
  { key: 'typescript', label: 'TypeScript' },
  { key: 'react', label: 'React' },
  { key: 'next', label: 'Next.js' },
  { key: 'node', label: 'Node.js' },
  { key: 'express', label: 'Express' },
  { key: 'php', label: 'PHP' },
  { key: 'laravel', label: 'Laravel' },
  { key: 'mysql', label: 'MySQL' },
  { key: 'postgresql', label: 'PostgreSQL' },
  { key: 'mongodb', label: 'MongoDB' },
  { key: 'redis', label: 'Redis' },
  { key: 'docker', label: 'Docker' },
  { key: 'kubernetes', label: 'Kubernetes' },
  { key: 'aws', label: 'AWS' },
  { key: 'git', label: 'Git' },
  { key: 'tailwind', label: 'Tailwind' },
  { key: 'mui', label: 'Material UI' },
  { key: 'bootstrap', label: 'Bootstrap' },
]

function Skills() {
  return (
    <div className={''}>
      <Container className="py-12" id="skills">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Skills</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Compact, icon-based overview</p>
        </div>
        <div className="py-8 flex flex-wrap">
          {skills.map((item, index) => (
              <div key={index} className="fcc flex-col">
                <p>{item?.category}</p>
                <div className="fcc flex-wrap gap-4">
                  {item?.items?.map((subItem, subIndex)=>(
                      <div key={subIndex} className="">
                        <span className="">
                          <ReactIcon name={subItem?.icon} className="text-2xl" />
                        </span>
                      </div>
                  ))}
                </div>
              </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-items-center">
          {/*{skills.map((item, index) => (
            <div key={index} title={s?.item} className="fcc flex-col gap-2">
              <span className="size-12 rounded-xl fcc bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md duration-200">
                <ReactIcon name={s.key} className="text-2xl" />
              </span>
            </div>
          ))}*/}
        </div>
      </Container>
    </div>
  )
}

export default Skills
