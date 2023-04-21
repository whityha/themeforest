import React from 'react';
import { useTranslation } from 'react-i18next';

import Breadcrumbs from '@/components/Breadcrumbs';
import { SERVICES_CARDS_DATA } from '@/constants/Mocks/Services';

import ServicesCard from '../../Cards/ServicesCard';
import FlexBox from '../../FlexBox';

import { CardsContainer, Content, Subtext, Subtitle, Title, Wrapper } from './styled';

const SectionServices = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <FlexBox alignSelf="start">
                    <Breadcrumbs paths={['Home', 'Services']} />
                </FlexBox>
                <Subtitle>{translation('Services.subtitle')}</Subtitle>
                <Title>{translation('Services.title')}</Title>
                <Subtext>{translation('Services.subtext')}</Subtext>
                <CardsContainer>
                    {SERVICES_CARDS_DATA.map(({ icon, subtext, title, link }) => {
                        return (
                            <ServicesCard
                                link={link}
                                key={icon}
                                title={translation(title)}
                                src={icon}
                            >
                                {translation(subtext)}
                            </ServicesCard>
                        );
                    })}
                </CardsContainer>
            </Content>
        </Wrapper>
    );
};

export default SectionServices;
