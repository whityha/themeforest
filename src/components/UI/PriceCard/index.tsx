import React from 'react';
import { useTranslation } from 'react-i18next';

import { Parag3 } from '@/theme/UI/Paragraphs';
import { Title7 } from '@/theme/UI/Titles';

import FlexBox from '../FlexBox';

import RadioButton from './RadioButton';
import {
    ButtonPlan,
    Input,
    Label,
    Possibilities,
    Possibility,
    Price,
    Title,
    Wrapper,
} from './styled';

const PriceCard = ({
    options,
}: {
    options: {
        title: string;
        price: number | string;
        possibilities: string;
        possibilitiesCount: number;
        buttonText: string;
    };
}) => {
    const { buttonText, title, price, possibilities, possibilitiesCount } = options;
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Title>{title}</Title>
            <FlexBox w={100} justifyContent="flex-end" alignItems="center">
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
            </FlexBox>
            <ButtonPlan>
                <Title7>{buttonText}</Title7>
            </ButtonPlan>
            <Possibilities>
                {Array(possibilitiesCount)
                    .fill(1)
                    .map((_, i) => {
                        return (
                            <Possibility key={t(`${possibilities}.${i}`)}>
                                <Parag3>{t(`${possibilities}.${i}`)}</Parag3>
                            </Possibility>
                        );
                    })}
            </Possibilities>
        </Wrapper>
    );
};

export default PriceCard;
