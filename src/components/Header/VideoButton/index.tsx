import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title7 } from '@/theme/UI/Titles';

import { Wrapper } from './styled';

interface VideoButton {
    light: boolean;
    onClick: () => void;
}

const VideoButton = ({ light, onClick }: VideoButton) => {
    const { t } = useTranslation();
    return (
        <Wrapper onClick={onClick} light={light}>
            <Title7>{t('header.videoButton')}</Title7>
        </Wrapper>
    );
};
export default VideoButton;
