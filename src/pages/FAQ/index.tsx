import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SectionFAQTitle, SectionNeedHelp, SectionSubscribe } from '@/components/UI/Sections';
import { Backgrounds } from '@/types';

const FAQ = () => {
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <SectionFAQTitle />
            <SectionNeedHelp />
            <SectionSubscribe background={Backgrounds.DarkBlue} />
            <Footer />
        </>
    );
};

export default FAQ;
