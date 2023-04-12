import React from 'react';
import { useTranslation } from 'react-i18next';

import BenefitsCard from '@/components/UI/Cards/BenefitsCard';
import FlexBox from '@/components/UI/FlexBox';

import { BENEFITS_CARDS } from './config';
import { ContainerCards, Content, SubTitle, Title, Wrapper } from './styled';

const SectionBenefits = () => {
    const { t } = useTranslation();
    return (
        <Wrapper background="background">
            <Content>
                <FlexBox w={50} direction="column">
                    <Title>{t('Benefits.title')}</Title>
                    <SubTitle>{t('Benefits.subtext')}</SubTitle>
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
