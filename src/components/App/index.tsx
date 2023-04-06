import React from 'react';
import { useTranslation } from 'react-i18next';

import { Title1, Title4 } from '@/theme/UI/Titles';

import { Wrapper } from './styled';

import './fonts.css';

const App = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Title1>{t('header.video')}</Title1>
            <Title4>{t('header.navbar.home')}</Title4>
            <Title4>{t('header.navbar.contacts')}</Title4>
        </Wrapper>
    );
};

export default App;
