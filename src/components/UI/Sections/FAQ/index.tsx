import React from 'react';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '@/components/Breadcrumbs';

import FlexBox from '../../FlexBox';

import Accordion from './Accordion';
import { Content, Subtext, Subtitle, Title, Wrapper } from './styled';

const SectionFAQTitle = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <FlexBox alignSelf="start">
                    <Breadcrumbs paths={['Home', t('FAQ.subtitle')]} />
                </FlexBox>
                <Subtitle>{t('FAQ.subtitle')}</Subtitle>
                <Title>{t('FAQ.title')}</Title>
                <Subtext>{t('FAQ.subtext')}</Subtext>
                <Accordion />
            </Content>
        </Wrapper>
    );
};

export default SectionFAQTitle;
