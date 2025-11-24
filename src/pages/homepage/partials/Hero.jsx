import React from 'react';
import IntroHeader from './IntroHeader.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import WorksSection from './WorksSection.jsx';
import ProductsSection from './ProductsSection.jsx';
import HireMeSection from './HireMeSection.jsx';
import FollowMeSection from './FollowMeSection.jsx';

function Hero() {
    return (
        <>
            <IntroHeader />
            <ProjectsSection />
            <WorksSection />
            <ProductsSection />
            <HireMeSection />
            <FollowMeSection />
        </>
    );
}

export default Hero;