import React from 'react';
import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { FeaturedProjects } from '../components/home/FeaturedProjects';

import { SiteVisit } from '../components/home/SiteVisit';
import { PromoSection } from '../components/home/PromoSection';
import { CTASection } from '../components/home/CTASection';

export const Home: React.FC = () => {
    return (
        <div className="bg-white">
            <Hero />
            <Stats />
            <FeaturedProjects />
            <SiteVisit />
            <PromoSection />
            <CTASection />
        </div>
    );
};
