import React from 'react';
import { useTranslation } from 'react-i18next';

import { Backgrounds } from '@/types';

import SectionTitleBetween from '../../Templates/SectionTitleBetween';

const SectionTitleTeam = () => {
    const { t } = useTranslation();
    return (
        <SectionTitleBetween
            background={Backgrounds.DarkBlue}
            title="Our team"
            subtext={t('OurTeam.subtext')}
        />
    );
};

export default SectionTitleTeam;
