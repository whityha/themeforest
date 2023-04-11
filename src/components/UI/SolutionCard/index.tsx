import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Icon, Subtext, Title, Wrapper } from './styled';

const SolutionCard = ({
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
            <Button>Read more</Button>
        </Wrapper>
    );
};

export default SolutionCard;
