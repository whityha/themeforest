import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    SectionAboutUsContent,
    SectionAboutUsNumbers,
    SectionContactUs,
    SectionOurCustomers,
    SectionSubscribe,
} from '@/components/UI/Sections';
import SectionTitleMiddle from '@/components/UI/Templates/SectionTitleMiddle';
import { Backgrounds } from '@/types';

const AboutUs = () => {
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <SectionTitleMiddle title="About Us" />
            <SectionAboutUsContent />
            <SectionAboutUsNumbers />
            <SectionOurCustomers />
            <SectionContactUs />
            <SectionSubscribe background={Backgrounds.Blue} />
            <SectionSubscribe background={Backgrounds.DarkBlue} />
            <Footer />
        </>
    );
};

export default AboutUs;
