import React from 'react'
import Container from '../../common/Container.jsx'
import {profile, social} from '../../../data/data.jsx'
import {ReactIcon} from '../../common/ReactIcon.jsx'
import {Image} from "../../../utils/Global.jsx";

function Footer() {
  const iconFor = (label) => {
    const key = String(label || '').toLowerCase()
    if (key.includes('github')) return 'github'
    if (key.includes('linkedin')) return 'linkedin'
    if (key.includes('email')) return 'email'
    if (key.includes('phone')) return 'phone'
    return 'web'
  }

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 dark:border-gray-800 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary-dark/10">
      <div className="absolute -left-20 -top-24 size-80 rounded-full bg-primary/10 blur-2xl"></div>
      <div className="absolute right-[-40px] bottom-[-40px] size-80 rounded-full bg-secondary/10 blur-2xl"></div>
      <Container className="py-16 space-y-6 relative">
        <div className="grid sm:grid-cols-5 items-center gap-6">
          <div className="col-span-2 space-y-1">
            <figure className={'size-16 rounded-md overflow-hidden border-2  border-primary/40 dark:border-gray-300 '}>
              <Image src={profile?.image} className={'image-cover'}/>
            </figure>
            <div className="text-xl sm:text-2xl font-semibold">{profile?.fullName || profile?.name || 'Portfolio'}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{profile?.role}</div>
            <div className="w-16 h-0.5 bg-primary"></div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">{profile?.summary}</div>
          </div>
          <div className=""></div>
          <div className="col-span-2 space-y-2">
            <h3 className={'text-lg font-medium'}>Find me in:</h3>
            <div className="space-y-3">
              {social.map((s, idx) => {
                const name = iconFor(s.label)
                const external = String(s.href || '').startsWith('http')
                return (
                    <div key={`${s.label}-${idx}`}>
                      <a

                          href={s.href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className="fc gap-2"
                      >
                    <span className="size-6 rounded-full fcc bg-primary/10 dark:bg-primary/20">
                      <ReactIcon name={name} className="text-primary text-sm" />
                    </span>
                        <span className="text-sm font-medium">{s.value}</span>
                      </a>
                    </div>
                )
              })}
            </div>
          </div>

        </div>
      </Container>
      {/*<div className="bg-gray-900 py-3">
        <Container>
          <div className="fcb">
            <div className="text-sm text-gray-300 dark:text-gray-400">© {new Date().getFullYear()} {profile?.fullName || profile?.name || 'Portfolio'}</div>
            <div className="text-sm text-gray-300 dark:text-gray-400">All rights reserved.</div>
          </div>
        </Container>
      </div>*/}
    </footer>
  )
}

export default Footer
