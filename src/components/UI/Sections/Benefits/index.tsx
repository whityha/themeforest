import React from 'react';
import { useTranslation } from 'react-i18next';

import BenefitsCard from '@/components/UI/Cards/BenefitsCard';
import FlexBox from '@/components/UI/FlexBox';
import { Backgrounds } from '@/types';

import { BENEFITS_CARDS } from './config';
import { ContainerCards, Content, SubTitle, Title, Wrapper } from './styled';

const SectionBenefits = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper background={Backgrounds.Grey}>
            <Content>
                <FlexBox w={50} direction="column">
                    <Title>{translation('Benefits.title')}</Title>
                    <SubTitle>{translation('Benefits.subtext')}</SubTitle>
                </FlexBox>
                <ContainerCards>
                    {BENEFITS_CARDS.map(({ icon, subtext, title }) => {
                        return (
                            <BenefitsCard key={icon} src={icon} title={title}>
                                {subtext}
                            </BenefitsCard>
                        );
                    })}
                </ContainerCards>
            </Content>
        </Wrapper>
    );
};

export default SectionBenefits;
