import React from 'react';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '@/components/Breadcrumbs';
import { SERVICES_CARDS_DATA } from '@/constants/Mocks/Services';

import ServicesCard from '../../Cards/ServicesCard';
import FlexBox from '../../FlexBox';

import { CardsContainer, Content, Subtext, Subtitle, Title, Wrapper } from './styled';

const SectionServices = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <FlexBox alignSelf="start">
                    <Breadcrumbs paths={['Home', 'Services']} />
                </FlexBox>
                <Subtitle>{t('Services.subtitle')}</Subtitle>
                <Title>{t('Services.title')}</Title>
                <Subtext>{t('Services.subtext')}</Subtext>
                <CardsContainer>
                    {SERVICES_CARDS_DATA.map(({ icon, subtext, title, link }) => {
                        return (
                            <ServicesCard link={link} key={icon} title={t(title)} src={icon}>
                                {t(subtext)}
                            </ServicesCard>
                        );
                    })}
                </CardsContainer>
            </Content>
        </Wrapper>
    );
};

export default SectionServices;
