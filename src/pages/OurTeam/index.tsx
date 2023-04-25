import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MobilePageTitle from '@/components/MobilePageTitle';
import { SectionSubscribe, SectionTeamCards, SectionTitleTeam } from '@/components/UI/Sections';
import { Backgrounds } from '@/types';

const OurTeam = () => {
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <SectionTitleTeam />
            <MobilePageTitle pageName="Our team" />
            <SectionTeamCards />
            <SectionSubscribe screen="mobile" background={Backgrounds.Blue} />
            <Footer />
        </>
    );
};

export default OurTeam;
