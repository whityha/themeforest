import React from 'react';
import { useTranslation } from 'react-i18next';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

import { CLIENT_ID } from '@/constants';
import { Parag3 } from '@/theme/UI/Paragraphs';

import { Possibilities, Possibility, Price, Title, Wrapper } from './styled';

interface OptionsModal {
    title: string;
    price: number | string;
    possibilitiesCount: number;
    possibilities: string;
}

const PayPalModal = ({ options }: { options: OptionsModal }) => {
    const { title, price, possibilitiesCount, possibilities } = options;
    const { t: translate } = useTranslation();
    return (
        <Wrapper>
            <Title>Plan: {title}</Title>
            <Price>{price}</Price>
            <Possibilities>
                {Array(possibilitiesCount)
                    .fill(1)
                    .map((_, i) => {
                        return (
                            <Possibility key={translate(`${possibilities}.${i}`)}>
                                <Parag3>{translate(`${possibilities}.${i}`)}</Parag3>
                            </Possibility>
                        );
                    })}
            </Possibilities>
            <PayPalScriptProvider options={{ 'client-id': CLIENT_ID }}>
                <PayPalButtons style={{ layout: 'vertical' }} />
            </PayPalScriptProvider>
        </Wrapper>
    );
};

export default PayPalModal;
