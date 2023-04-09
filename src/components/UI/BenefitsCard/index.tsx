import React from 'react';
import { useTranslation } from 'react-i18next';

import { Icon, Subtext, Title, Wrapper } from './styled';

const BenefitsCard = ({
    children,
    src,
    title,
}: {
    children: string;
    src: string;
    title: string;
}) => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Icon src={src} />
            <Title>{t(title)}</Title>
            <Subtext>{t(children)}</Subtext>
        </Wrapper>
    );
};

export default BenefitsCard;
