import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MobilePageTitle from '@/components/MobilePageTitle';
import { SectionSubscribe, SectionTeamCards, SectionTitleTeam } from '@/components/UI/Sections';
import MobileContent from '@/components/UI/Sections/SectionTitleTeam/MobileContent';
import { Backgrounds, SCREEN } from '@/types';

const OurTeam = () => {
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <SectionTitleTeam />
            <MobilePageTitle pageName="Our team" />
            <MobileContent />
            <SectionTeamCards />
            <SectionSubscribe screenOnly={SCREEN.Mobile} background={Backgrounds.Blue} />
            <Footer />
        </>
    );
};

export default OurTeam;
