import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    SectionNeedHelp,
    SectionOurStats,
    SectionServices,
    SectionSubscribe,
} from '@/components/UI/Sections';
import { Backgrounds } from '@/types';

const Services = () => {
    return (
        <>
            <Header background={Backgrounds.White} />
            <SectionServices />
            <SectionOurStats />
            <SectionNeedHelp />
            <SectionSubscribe background={Backgrounds.DarkBlue} />
            <Footer />
        </>
    );
};

export default Services;
