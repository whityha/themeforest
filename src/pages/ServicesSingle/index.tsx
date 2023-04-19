import React from 'react';
import { useParams } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
    SectionContactInformation,
    SectionServicesContent,
    SectionServicesTitle,
    SectionSubscribe,
} from '@/components/UI/Sections';
import { Backgrounds } from '@/types';

const ServicesSingle = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <>
            <Header background={Backgrounds.DarkBlue} />
            <SectionServicesTitle id={id!} background={Backgrounds.DarkBlue} />
            <SectionServicesContent routeID={id!} />
            <SectionContactInformation />
            <SectionSubscribe background={Backgrounds.DarkBlue} />
            <Footer />
        </>
    );
};

export default ServicesSingle;
