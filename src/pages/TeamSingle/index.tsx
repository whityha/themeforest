import React from 'react';
import { useParams } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SectionPersonInfo, SectionPersonTitle, SectionSubscribe } from '@/components/UI/Sections';
import { Backgrounds } from '@/types';

const TeamSingle = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <SectionPersonTitle id={id} />
            <SectionPersonInfo id={id} />
            <SectionSubscribe background={Backgrounds.Blue} />
            <Footer />
        </>
    );
};

export default TeamSingle;
