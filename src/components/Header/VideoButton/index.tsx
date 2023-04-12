import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title7 } from '@/theme/UI/Titles';

import { Wrapper } from './styled';

const VideoButton = ({ light }: { light: boolean }) => {
    const { t } = useTranslation();
    return (
        <Wrapper light={light}>
            <Title7>{t('header.videoButton')}</Title7>
        </Wrapper>
    );
};
export default VideoButton;
