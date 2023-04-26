import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MobilePageTitle from '@/components/MobilePageTitle';
import {
    SectionAboutUsContent,
    SectionAboutUsNumbers,
    SectionContactUs,
    SectionNeedHelp,
    SectionOurCustomers,
    SectionOurStats,
    SectionSubscribe,
    SectionTestimonials,
} from '@/components/UI/Sections';
import SectionTitleMiddle from '@/components/UI/Templates/SectionTitleMiddle';
import { Backgrounds, SCREEN } from '@/types';

import { Image } from './styled';

const AboutUs = () => {
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <>
                <MobilePageTitle pageName="About Us" />
                <Image />
                <SectionOurStats background={Backgrounds.Grey} screenOnly={SCREEN.Mobile} />
                <SectionTestimonials screenOnly={SCREEN.Mobile} />
                <SectionNeedHelp screenOnly={SCREEN.Mobile} />
            </>
            <SectionTitleMiddle screenOnly={SCREEN.Desktop} title="About Us" />
            <SectionAboutUsContent screenOnly={SCREEN.Desktop} />
            <SectionAboutUsNumbers screenOnly={SCREEN.Desktop} />
            <SectionOurCustomers />
            <SectionContactUs />
            <SectionSubscribe screenOnly={SCREEN.Desktop} background={Backgrounds.Blue} />
            <SectionSubscribe background={Backgrounds.DarkBlue} />
            <Footer />
        </>
    );
};

export default AboutUs;
