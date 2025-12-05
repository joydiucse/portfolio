import React, { useState } from 'react'
import Container from '../../components/common/Container.jsx'
import {profile} from '../../data/data.jsx'
import {ReactIcon} from '../common/Icons.jsx'
import {PrimaryButton} from "../common/Buttons.jsx";

const highlights = [
    {
        icon: "web",
        title: "Clean Architecture",
        description: "Scalable, maintainable systems",
        bg: "bg-primary/10 dark:bg-primary/20",
        color: "text-primary"
    },
    {
        icon: "info",
        title: "Fast Delivery",
        description: "Iterative and reliable",
        bg: "bg-secondary/10",
        color: "text-secondary"
    },
    {
        icon: "right-arrow",
        title: "Secure & Performant",
        description: "Best practices applied",
        bg: "bg-rose-500/10",
        color: "text-rose-500"
    }
]

function HireMe() {
  const email = profile?.email || ''
  const phone = profile?.phone || ''
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(title || 'Project Proposal')
    const body = encodeURIComponent(details || '')
    const href = `mailto:${email}?subject=${subject}&body=${body}`
    window.location.href = href
  }

  return (
    <div className="">
      <Container className="py-12" id="hire-me">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="font-medium text-border-design-secondary space-y-1">
              <p className="text-2xl md:text-3xl">Let’s work</p>
              <p className="text-4xl md:text-5xl text-primary-dark pb-2">Together</p>
            </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                  {highlights.map((item, index) => (
                      <div key={index} className=" fcs gap-3">
                          <span className={`size-10 rounded-lg fcc ${item.bg}`}>
                            <ReactIcon name={item.icon} className={item.color} />
                          </span>
                          <div>
                              <div className="text-sm font-semibold">{item.title}</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">{item.description}</div>
                          </div>
                      </div>
                  ))}
              </div>

          </div>
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800 p-6 shadow-sm">
              <div className="space-y-6">
                <div className="fcb">
                  <div className="space-y-1">
                    <div className="text-lg font-semibold">Contact</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Let’s discuss your project</div>
                  </div>
                  <div className="fcc gap-2">
                    <a href={`mailto:${email}`} className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark">
                      <ReactIcon name={'email'} />
                      <span>Email Me</span>
                    </a>
                    <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-lg bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <ReactIcon name={'phone'} />
                      <span>Call Me</span>
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-medium">Send me a proposal</div>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        required
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-950 ring-1 ring-gray-200 dark:ring-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Details"
                        required
                        rows={4}
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-950 ring-1 ring-gray-200 dark:ring-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="fce">
                        <PrimaryButton>
                            <ReactIcon name={'right-arrow'} />
                            <span>Send Proposal</span>
                        </PrimaryButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HireMe
