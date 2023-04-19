import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SectionPageError } from '@/components/UI/Sections';
import { Backgrounds } from '@/types';

const Page404 = () => {
    return (
        <>
            <Header background={Backgrounds.DarkBlue} />
            <SectionPageError />
            <Footer />
        </>
    );
};

export default Page404;
