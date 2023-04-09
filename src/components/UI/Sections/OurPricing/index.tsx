import React from 'react';
import { useTranslation } from 'react-i18next';

import PriceCard from '@/components/UI/PriceCard';

import { RATES } from './config';
import { Cards, Title, Wrapper } from './styled';

const SectionOurPricing = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Title>{t('OurPricing.title')}</Title>
            <Cards>
                {RATES.map(({ title, price, buttonText, possibilities, possibilitiesCount }) => {
                    return (
                        <PriceCard
                            key={title}
                            options={{
                                title: t(title),
                                price,
                                buttonText: t(buttonText),
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
