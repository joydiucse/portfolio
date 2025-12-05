import React from 'react';
import Hero from '../../components/sections/Hero.jsx'
import ServicesList from '../../components/sections/ServicesList.jsx'
import Service from '../../components/sections/Service.jsx'
import StatsBar from '../../components/sections/StatsBar.jsx'
import ExperienceSection from '../../components/sections/ExperienceSection.jsx'
import LatestWorks from '../../components/sections/LatestWorks.jsx'
import Testimonials from '../../components/sections/Testimonials.jsx'
import CTASection from '../../components/sections/CTASection.jsx'

function HomePage() {
    return (
        <div className="">
            <Hero/>
            <Service/>
            <ExperienceSection/>
            <LatestWorks />
            <Testimonials />


            {/*<StatsBar />
      <ServicesList />
      <ExperienceSection />
      <LatestWorks />
      <Testimonials />
      <CTASection />*/}
        </div>
    );
}

export default HomePage;
