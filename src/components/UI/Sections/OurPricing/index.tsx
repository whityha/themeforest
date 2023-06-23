import React from 'react';
import { useTranslation } from 'react-i18next';

import PriceCard from '@/components/UI/Cards/PriceCard';

import { RATES } from './config';
import { Cards, CardsContainer, Content, Title, Wrapper } from './styled';

const SectionOurPricing = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Content>
                <Title>{translation('OurPricing.title')}</Title>
                <CardsContainer>
                    <Cards>
                        {RATES.map(
                            ({ title, price, buttonText, possibilities, possibilitiesCount }) => {
                                return (
                                    <PriceCard
                                        key={title}
                                        options={{
                                            title: translation(title),
                                            price,
                                            buttonText: translation(buttonText),
                                            possibilities,
                                            possibilitiesCount,
                                        }}
                                    />
                                );
                            }
                        )}
                    </Cards>
                </CardsContainer>
            </Content>
        </Wrapper>
    );
};

export default SectionOurPricing;
