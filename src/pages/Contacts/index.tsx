import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SectionContactsContent } from '@/components/UI/Sections';
import Map from '@/components/UI/Sections/Map';
import { Backgrounds } from '@/types';

const Contacts = () => {
    return (
        <>
            <Header background={Backgrounds.Grey} />
            <SectionContactsContent />
            <Map />
            <Footer />
        </>
    );
};

export default Contacts;
