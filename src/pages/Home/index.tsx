import React from 'react';

import Header from '@/components/Header';
import {
    SectionBenefits,
    SectionEnsome,
    SectionNeedHelp,
    SectionNewestPlatform,
    SectionOurBlog,
    SectionOurPricing,
    SectionOurStats,
    SectionRadically,
    SectionSubscribe,
    SectionTestimonials,
} from '@/components/UI/Sections';

const Home = () => {
    return (
        <>
            <Header />
            <SectionEnsome />
            <SectionNewestPlatform />
            <SectionRadically />
            <SectionOurStats />
            <SectionBenefits />
            <SectionTestimonials />
            <SectionOurPricing />
            <SectionOurBlog />
            <SectionNeedHelp />
            <SectionSubscribe />
        </>
    );
};

export default Home;
