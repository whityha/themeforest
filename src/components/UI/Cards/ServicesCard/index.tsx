import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button, Icon, Subtext, Title, Wrapper } from './styled';

const ServicesCard = ({
    children,
    src,
    title,
    link,
}: {
    children: string;
    src: string;
    title: string;
    link: string;
}) => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Icon src={src} />
            <Title>{t(title)}</Title>
            <Subtext>{t(children)}</Subtext>
            <Link to={`${link}`}>
                <Button>Read more</Button>
            </Link>
        </Wrapper>
    );
};

export default ServicesCard;
