import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    SectionChooseUs,
    SectionNeedHelp,
    SectionSolutions,
    SectionSubscribe,
    SectionTestimonials,
} from '@/components/UI/Sections';

const Solutions = () => {
    return (
        <>
            <Header background="white" />
            <SectionSolutions />
            <SectionChooseUs />
            <SectionTestimonials />
            <SectionNeedHelp />
            <SectionSubscribe background="darkBlue" />
            <Footer />
        </>
    );
};

export default Solutions;
