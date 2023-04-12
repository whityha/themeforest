import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    SectionNeedHelp,
    SectionOurStats,
    SectionServices,
    SectionSubscribe,
} from '@/components/UI/Sections';

const Services = () => {
    return (
        <>
            <Header background="white" />
            <SectionServices />
            <SectionOurStats />
            <SectionNeedHelp />
            <SectionSubscribe background="darkBlue" />
            <Footer />
        </>
    );
};

export default Services;
