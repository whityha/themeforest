import React from 'react';

import Footer from '@/components/Footer';
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
            <Header background="background" />
            <SectionEnsome />
            <SectionNewestPlatform />
            <SectionRadically />
            <SectionOurStats />
            <SectionBenefits />
            <SectionTestimonials />
            <SectionOurPricing />
            <SectionOurBlog />
            <SectionNeedHelp />
            <SectionSubscribe background="darkBlue" />
            <Footer />
        </>
    );
};

export default Home;
