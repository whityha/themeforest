import React from 'react';
import { useTranslation } from 'react-i18next';

import FlexBox from '@/components/UI/FlexBox';
import { STATS_NUMBER_HOME } from '@/constants';
import { Backgrounds, SCREEN } from '@/types';

import NumberBlock from '../Number';

import { PARTNERS } from './config';
import {
    Container,
    Content,
    ContentBox,
    ImageBlock,
    PartnersContainer,
    SubTitle,
    Title,
    Wrapper,
} from './styled';

interface SectionOurStats {
    screenOnly?: SCREEN;
    background?: Backgrounds;
}

const SectionOurStats = ({ screenOnly, background }: SectionOurStats) => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper screenOnly={screenOnly} background={background}>
            <Content>
                <Title>{translation('OurStats.title')}</Title>
                <Container>
                    <ContentBox>
                        {STATS_NUMBER_HOME.map(({ id, number, title }) => (
                            <NumberBlock key={id} number={number}>
                                {title}
                            </NumberBlock>
                        ))}
                    </ContentBox>
                    <ContentBox>
                        <SubTitle>{translation('OurStats.subtext')}</SubTitle>
                    </ContentBox>
                </Container>
                <FlexBox>
                    <PartnersContainer>
                        {PARTNERS.map((src) => (
                            <ImageBlock src={src} key={src} alt="partnerLogo" />
                        ))}
                    </PartnersContainer>
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionOurStats;
