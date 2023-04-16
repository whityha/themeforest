import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SectionTeamCards, SectionTitleTeam } from '@/components/UI/Sections';
import { Backgrounds } from '@/types';

const OurTeam = () => {
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <SectionTitleTeam />
            <SectionTeamCards />
            <Footer />
        </>
    );
};

export default OurTeam;
