import React from 'react';
import { useTranslation } from 'react-i18next';

import SectionTitleMiddle from '@/components/UI/Templates/SectionTitleMiddle';
import { TEAMMATES } from '@/constants/Mocks/OurTeam';

const SectionPersonTitle = ({ id }: { id?: string }) => {
    const { t } = useTranslation();
    const person = TEAMMATES[Number(id!)];
    return <SectionTitleMiddle path={['Home', 'Our team']} title={t(person.name)} />;
};

export default SectionPersonTitle;
