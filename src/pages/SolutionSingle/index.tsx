import React from 'react';
import { useParams } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    SectionDescription,
    SectionNeedHelp,
    SectionSolutionTitle,
    SectionSubscribe,
} from '@/components/UI/Sections';
import { Backgrounds } from '@/types';

const SolutionSingle = () => {
    const { id } = useParams();
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <SectionSolutionTitle id={id as string} />
            <SectionDescription id={id as string} />
            <SectionNeedHelp />
            <SectionSubscribe />
            <Footer />
        </>
    );
};

export default SolutionSingle;
