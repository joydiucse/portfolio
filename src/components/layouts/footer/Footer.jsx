import React from 'react'
import Container from '../../common/Container.jsx'
import {profile, social} from '../../../data/data.jsx'
import {ReactIcon} from '../../common/Icons.jsx'

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
    <footer className="mt-10 relative overflow-hidden border-t border-gray-200 dark:border-gray-800 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary-dark/10">
      <div className="absolute -left-20 -top-24 size-80 rounded-full bg-primary/10 blur-2xl"></div>
      <div className="absolute right-[-40px] bottom-[-40px] size-80 rounded-full bg-secondary/10 blur-2xl"></div>
      <Container className="py-16 space-y-6 relative">
        <div className="fcb flex-wrap gap-6">
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-semibold">{profile?.fullName || profile?.name || 'Portfolio'}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{profile?.role}</div>
          </div>
          <div className="space-y-2">
            <h3 className={'text-lg font-medium'}>Find me in:</h3>
            <div className="fcc gap-3 flex-wrap">
              {social.map((s, idx) => {
                const name = iconFor(s.label)
                const external = String(s.href || '').startsWith('http')
                return (
                    <a
                        key={`${s.label}-${idx}`}
                        href={s.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 pl-0.5 pr-4 py-0.5 rounded-full ring-1 ring-gray-200 dark:ring-gray-800 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 hover:ring-gray-300 dark:hover:ring-gray-700 shadow-sm hover:shadow-md transition"
                    >
                  <span className="size-8 rounded-full fcc bg-primary/10 dark:bg-primary/20">
                    <ReactIcon name={name} className="text-primary" />
                  </span>
                      <span className="text-sm font-medium">{s.label}</span>
                    </a>
                )
              })}
            </div>
          </div>

        </div>
      </Container>
      <div className="bg-gray-900 py-3">
        <Container>
          <div className="fcb">
            <div className="text-sm text-gray-300 dark:text-gray-400">© {new Date().getFullYear()} {profile?.fullName || profile?.name || 'Portfolio'}</div>
            <div className="text-sm text-gray-300 dark:text-gray-400">All rights reserved.</div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
