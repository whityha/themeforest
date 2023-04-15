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
import { Backgrounds } from '@/types';

const Solutions = () => {
    return (
        <>
            <Header background={Backgrounds.White} />
            <SectionSolutions />
            <SectionChooseUs />
            <SectionTestimonials />
            <SectionNeedHelp />
            <SectionSubscribe background={Backgrounds.DarkBlue} />
            <Footer />
        </>
    );
};

export default Solutions;
