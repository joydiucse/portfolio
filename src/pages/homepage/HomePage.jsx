import React from 'react';
import Hero from '../../components/sections/Hero.jsx'
import Service from '../../components/sections/Service.jsx'
import ExperienceSection from '../../components/sections/ExperienceSection.jsx'
import LatestWorks from '../../components/sections/LatestWorks.jsx'
import Testimonials from '../../components/sections/Testimonials.jsx'

function HomePage() {
    return (
        <div className="">
            <Hero/>
            <Service/>
            <ExperienceSection/>
            <LatestWorks />
            <Testimonials />


        </div>
    );
}

export default HomePage;
