import React from 'react';
import { useTranslation } from 'react-i18next';

import MobilePageTitle from '@/components/MobilePageTitle';
import SectionTitleBetween from '@/components/UI/Templates/SectionTitleBetween';
import { Backgrounds, SCREEN } from '@/types';

const SectionTitleBlog = () => {
    const { t: translation } = useTranslation();
    return (
        <>
            <SectionTitleBetween
                background={Backgrounds.DarkBlue}
                title="Blog"
                subtext={translation('Blog.subtext')}
                screenOnly={SCREEN.Mobile}
            />
            <MobilePageTitle pageName="Blog" />
        </>
    );
};

export default SectionTitleBlog;
