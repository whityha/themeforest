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

const ServicesSingle = () => {
    const { id } = useParams();
    return (
        <>
            <Header background="darkBlue" />
            <SectionServicesTitle id={id as string} background="darkBlue" />
            <SectionServicesContent routeID={id as string} />
            <SectionContactInformation />
            <SectionSubscribe background="darkBlue" />
            <Footer />
        </>
    );
};

export default ServicesSingle;
