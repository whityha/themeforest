import React from 'react';
import { useTranslation } from 'react-i18next';

import BenefitsCard from '@/components/UI/Cards/BenefitsCard';
import { Backgrounds } from '@/types';

import { BENEFITS_CARDS } from './config';
import {
    ContainerCards,
    ContainerText,
    Content,
    SubTitle,
    Title,
    Wrapper,
    WrapperCards,
} from './styled';

const SectionBenefits = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper background={Backgrounds.Grey}>
            <Content>
                <ContainerText>
                    <Title>{translation('Benefits.title')}</Title>
                    <SubTitle>{translation('Benefits.subtext')}</SubTitle>
                </ContainerText>
                <WrapperCards>
                    <ContainerCards>
                        {BENEFITS_CARDS.map(({ icon, subtext, title }) => {
                            return (
                                <BenefitsCard key={icon} src={icon} title={title}>
                                    {subtext}
                                </BenefitsCard>
                            );
                        })}
                    </ContainerCards>
                </WrapperCards>
            </Content>
        </Wrapper>
    );
};

export default SectionBenefits;
