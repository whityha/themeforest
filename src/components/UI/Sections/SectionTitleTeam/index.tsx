import React from 'react';
import { useTranslation } from 'react-i18next';

import { Backgrounds, SCREEN } from '@/types';

import SectionTitleBetween from '../../Templates/SectionTitleBetween';

const SectionTitleTeam = () => {
    const { t: translation } = useTranslation();
    return (
        <SectionTitleBetween
            background={Backgrounds.DarkBlue}
            title="Our team"
            subtext={translation('OurTeam.subtext')}
            screenOnly={SCREEN.Desktop}
        />
    );
};

export default SectionTitleTeam;
