import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title7 } from '@/theme/UI/Titles';

import { Wrapper } from './styled';

const VideoButton = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Title7>{t('header.videoButton')}</Title7>
        </Wrapper>
    );
};
export default VideoButton;
