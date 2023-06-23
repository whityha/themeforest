import React from 'react';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '@/components/Breadcrumbs';

import FlexBox from '../../FlexBox';

import Accordion from './Accordion';
import { Content, Subtext, Subtitle, Title, Wrapper } from './styled';

const SectionFAQTitle = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <FlexBox alignSelf="start">
                    <Breadcrumbs paths={['Home', translation('FAQ.subtitle')]} />
                </FlexBox>
                <Subtitle>{translation('FAQ.subtitle')}</Subtitle>
                <Title>{translation('FAQ.title')}</Title>
                <Subtext>{translation('FAQ.subtext')}</Subtext>
                <Accordion />
            </Content>
        </Wrapper>
    );
};

export default SectionFAQTitle;
