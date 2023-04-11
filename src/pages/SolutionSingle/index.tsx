import React from 'react';
import { useParams } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SectionDescription, SectionNeedHelp, SectionSubscribe } from '@/components/UI/Sections';
import SectionSolutionTitle from '@/components/UI/Sections/SolutionTitle';

const SolutionSingle = () => {
    const { id } = useParams();
    return (
        <>
            <Header background="background" />
            <SectionSolutionTitle />
            <SectionDescription id={id as string} />
            <SectionNeedHelp />
            <SectionSubscribe />
            <Footer />
        </>
    );
};

export default SolutionSingle;
