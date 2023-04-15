import React from 'react';
import { useTranslation } from 'react-i18next';

import FlexBox from '@/components/UI/FlexBox';
import { STATS_NUMBER_HOME } from '@/constants';

import NumberBlock from '../Number';

import { PARTNERS } from './config';
import { Content, ContentBox, ImageBlock, SubTitle, Title, Wrapper } from './styled';

const SectionOurStats = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Title>{t('OurStats.title')}</Title>
            <Content>
                <ContentBox>
                    {STATS_NUMBER_HOME.map(({ id, number, title }) => (
                        <NumberBlock key={id} number={number}>
                            {title}
                        </NumberBlock>
                    ))}
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
