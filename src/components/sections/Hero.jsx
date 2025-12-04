import React from 'react'
import Container from '../../components/common/Container.jsx'
import {profile} from "../../data/data.jsx";
import {image, Image} from "../../utils/Global.jsx";

function Hero() {
  const displayName = profile?.shortName || profile?.namePro || profile?.fullName || profile?.name || profile?.firstName || ''
  return (
    <div className="bg-primary-xlight overflow-hidden relative">
      <Container className="">
        <div className="grid grid-cols-1 lg:grid-cols-5 sm:gap-20 items-center relative">
          <div className="col-span-3 fsc relative">
            {/* Arrow line */}
            {/* Rectangle outline */}
            <svg className="hidden sm:block absolute left-[130px] top-5 text-secondary opacity-70 rotate-6" width="160" height="120" viewBox="0 0 160 120">
              <rect x="6" y="6" width="148" height="108" rx="16" ry="16" fill="none" stroke="currentColor" strokeWidth="3" className="animate-draw"></rect>
            </svg>
            {/* Triangle outline */}


            {/* Dashed line */}
            <svg className="hidden sm:block absolute left-[280px] bottom-18 text-primary opacity-50" width="160" height="20" viewBox="0 0 160 20">
              <line x1="0" y1="10" x2="160" y2="10" stroke="currentColor" strokeDasharray="8 6" strokeWidth="3" className="animate-draw"></line>
            </svg>
            <div className="space-y-4 pt-8">
              <div className="text-5xl sm:text-7xl font-bold leading-tight space-y-2">
                <p>Hey There,</p>
                <p>I’m <span className={'text-primary text-6xl sm:text-8xl'}>{displayName}</span></p>
              </div>
              <p className="text-gray-600 w-3/4">{profile?.summary}</p>
              <div className="fc gap-2">

              </div>
              {/*<a href={`mailto:${profile?.email}`}className="inline-block text-teal-700 font-medium">{profile?.email}</a>*/}
            </div>
          </div>
          <div className="col-span-2 h-full fee lg:pt-4 relative">
            <Image
                src={image('hero/hero-bg.png')}
                className={'w-full sm:max-w-[360px] 2xl:max-w-[420px]'}
            />
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Hero