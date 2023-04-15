import React from 'react';
import { useTranslation } from 'react-i18next';

import { SERVICES_PAGE_DATA } from '@/constants/Mocks/Services';
import { Backgrounds } from '@/types';

import SectionTitleBetween from '../../Templates/SectionTitleBetween';

const SectionServicesTitle = ({ background, id }: { id: string; background: Backgrounds }) => {
    const { title, subtext } = SERVICES_PAGE_DATA[id];
    const { t } = useTranslation();
    return <SectionTitleBetween background={background} subtext={t(subtext)} title={t(title)} />;
};

export default SectionServicesTitle;
