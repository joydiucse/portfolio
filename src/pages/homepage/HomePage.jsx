import React from 'react';
import Hero from '../../components/sections/Hero.jsx'
import Service from '../../components/sections/Service.jsx'
import ExperienceSection from '../../components/sections/ExperienceSection.jsx'
import LatestWorks from '../../components/sections/LatestWorks.jsx'
import Testimonials from '../../components/sections/Testimonials.jsx'
import HireMe from "../../components/sections/HireMe.jsx";
import Skills from "../../components/sections/Skills.jsx";
import AboutMe from "../../components/sections/AboutMe.jsx";

function HomePage() {
    return (
        <div className="">
            <Hero/>
            <Service/>
            <AboutMe/>
            <Skills/>
            <ExperienceSection/>
            <LatestWorks />
            <Testimonials />
            <HireMe/>

        </div>
    );
}

export default HomePage;
