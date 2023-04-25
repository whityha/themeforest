import React from 'react';
import { useTranslation } from 'react-i18next';

import MobilePageTitle from '@/components/MobilePageTitle';
import { SERVICES_CARDS_DATA } from '@/constants/Mocks/Services';

import ServicesCard from '../../Cards/ServicesCard';

import { CardsContainer, Content, Wrapper } from './styled';

const SectionServices = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <MobilePageTitle pageName="Services" />
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
