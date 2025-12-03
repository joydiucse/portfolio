import React from 'react'
import Container from '../../components/common/Container.jsx'
import {profile} from "../../data/data.jsx";
import {image, Image} from "../../utils/Global.jsx";

function Hero() {
  return (
    <div className="bg-primary-xlight  overflow-hidden">
      <Container className="">
        <div className="grid grid-cols-1 lg:grid-cols-5 sm:gap-20 items-center">
          <div className="col-span-3 fcc relative">
            <div className="space-y-4 pt-8">
              <div className="text-5xl sm:text-7xl font-bold leading-tight space-y-2">
                <p>Hey There,</p>
                <p>I’m <span className={'text-primary text-6xl sm:text-8xl'}>{profile?.firstName}</span></p>
              </div>
              <p className="text-gray-600">{profile?.summary}</p>
              <div className="fc gap-2">

              </div>
              {/*<a href={`mailto:${profile?.email}`}className="inline-block text-teal-700 font-medium">{profile?.email}</a>*/}
            </div>
          </div>
          <div className="col-span-2 h-full fee lg:pt-4">
            <Image
                src={image('hero/hero-bg.png')}
                className={'lg:min-h-[480px] lg:h-[calc(100vh_-_120px)]'}
            />
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Hero