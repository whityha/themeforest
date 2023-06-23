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
import { Backgrounds } from '@/types';

const Home = () => {
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <SectionEnsome />
            <SectionNewestPlatform />
            <SectionRadically />
            <SectionOurStats />
            <SectionBenefits />
            <SectionTestimonials />
            <SectionOurPricing />
            <SectionOurBlog />
            <SectionNeedHelp />
            <SectionSubscribe background={Backgrounds.DarkBlue} />
            <Footer />
        </>
    );
};

export default Home;
