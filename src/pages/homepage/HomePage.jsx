import React from 'react';
import IntroHeader from "./partials/IntroHeader.jsx";
import ProjectsSection from "./partials/ProjectsSection.jsx";
import WorksSection from "./partials/WorksSection.jsx";
import ProductsSection from "./partials/ProductsSection.jsx";
import HireMeSection from "./partials/HireMeSection.jsx";
import FollowMeSection from "./partials/FollowMeSection.jsx";

function HomePage() {
    return (
        <div>
            <IntroHeader />
            <ProjectsSection />
            <WorksSection />
            <ProductsSection />
            <HireMeSection />
            <FollowMeSection />
        </div>
    );
}

export default HomePage;
