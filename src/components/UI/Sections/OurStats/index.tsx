import React from 'react';
import { useTranslation } from 'react-i18next';

import FlexBox from '@/components/UI/FlexBox';

import { PARTNERS } from './config';
import NumberBlock from './Number';
import { Content, ContentBox, ImageBlock, SubTitle, Title, Wrapper } from './styled';

const SectionOurStats = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Title>{t('OurStats.title')}</Title>
            <Content>
                <ContentBox>
                    <NumberBlock number="2000+">{t('OurStats.subtitle1')}</NumberBlock>
                    <NumberBlock number="843">{t('OurStats.subtitle2')}</NumberBlock>
                    <NumberBlock number="390">{t('OurStats.subtitle3')}</NumberBlock>
                </ContentBox>
                <ContentBox>
                    <SubTitle>{t('OurStats.subtext')}</SubTitle>
                </ContentBox>
            </Content>
            <FlexBox>
                {PARTNERS.map((src) => (
                    <ImageBlock src={src} key={src} alt="partnerLogo" />
                ))}
            </FlexBox>
        </Wrapper>
    );
};

export default SectionOurStats;
