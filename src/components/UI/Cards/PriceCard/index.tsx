import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Popup from '@/components/Popup';
import { Parag3 } from '@/theme/UI/Paragraphs';
import { Title7 } from '@/theme/UI/Titles';

import PayPalModal from './PayPalModal';
import {
    ButtonPlan,
    Input,
    Label,
    Possibilities,
    Possibility,
    Price,
    PriceContainer,
    Title,
    Wrapper,
} from './styled';

export interface PriceCard {
    options: {
        title: string;
        price: number | string;
        possibilities: string;
        possibilitiesCount: number;
        buttonText: string;
    };
}

const PriceCard = ({ options }: PriceCard) => {
    const [isOpen, setIsOpen] = useState(false);
    const { buttonText, title, price, possibilities, possibilitiesCount } = options;
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            {isOpen && (
                <Popup close={() => setIsOpen(false)}>
                    <PayPalModal options={{ title, price, possibilities, possibilitiesCount }} />
                </Popup>
            )}
            <Title>{title}</Title>
            <PriceContainer>
                <Price>{price}</Price>
                <>
                    <Input id={`inputRadio${title}1`} type="radio" name={title} defaultChecked />
                    <Label htmlFor={`inputRadio${title}1`}>
                        <Title7>Mo</Title7>
                    </Label>
                </>
                <>
                    <Input id={`inputRadio${title}2`} type="radio" name={title} />
                    <Label htmlFor={`inputRadio${title}2`}>
                        <Title7>Yr</Title7>
                    </Label>
                </>
            </PriceContainer>
            <ButtonPlan onClick={() => setIsOpen(true)}>
                <Title7>{buttonText}</Title7>
            </ButtonPlan>
            <Possibilities>
                {Array(possibilitiesCount)
                    .fill(1)
                    .map((_, i) => {
                        return (
                            <Possibility key={translation(`${possibilities}.${i}`)}>
                                <Parag3>{translation(`${possibilities}.${i}`)}</Parag3>
                            </Possibility>
                        );
                    })}
            </Possibilities>
        </Wrapper>
    );
};

export default PriceCard;
