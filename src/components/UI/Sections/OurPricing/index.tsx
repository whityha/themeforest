import React from 'react';
import { useTranslation } from 'react-i18next';

import PriceCard from '@/components/UI/Cards/PriceCard';

import { RATES } from './config';
import { Cards, Title, Wrapper } from './styled';

const SectionOurPricing = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Title>{translation('OurPricing.title')}</Title>
            <Cards>
                {RATES.map(({ title, price, buttonText, possibilities, possibilitiesCount }) => {
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
                })}
            </Cards>
        </Wrapper>
    );
};

export default SectionOurPricing;
