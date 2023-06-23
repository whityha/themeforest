import React from 'react';
import { useTranslation } from 'react-i18next';

import { Icon, Subtext, Title, Wrapper } from './styled';

interface BenefitsCard {
    children: string;
    src: string;
    title: string;
}

const BenefitsCard = ({ children, src, title }: BenefitsCard) => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Icon src={src} />
            <Title>{translation(title)}</Title>
            <Subtext>{translation(children)}</Subtext>
        </Wrapper>
    );
};

export default BenefitsCard;
