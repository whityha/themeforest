import React from 'react';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '@/components/Breadcrumbs';
import SolutionCard from '@/components/UI/Cards/SolutionCard';
import { SOLUTIONS_CARDS_DATA } from '@/constants/Mocks/Solutions';

import FlexBox from '../../FlexBox';

import { CardsContainer, Content, Subtext, Subtitle, Title, Wrapper } from './styled';

const SectionSolutions = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <FlexBox alignSelf="start">
                    <Breadcrumbs paths={['Home', 'Solutions']} />
                </FlexBox>
                <Subtitle>{t('Solutions.subtitle')}</Subtitle>
                <Title>{t('Solutions.title')}</Title>
                <Subtext>{t('Solutions.subtext')}</Subtext>
                <CardsContainer>
                    {SOLUTIONS_CARDS_DATA.map(({ icon, subtext, title, link }) => {
                        return (
                            <SolutionCard link={link} key={icon} title={t(title)} src={icon}>
                                {t(subtext)}
                            </SolutionCard>
                        );
                    })}
                </CardsContainer>
            </Content>
        </Wrapper>
    );
};

export default SectionSolutions;
