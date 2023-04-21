import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button, Icon, Subtext, Title, Wrapper } from './styled';

interface SolutionCard {
    children: string;
    src: string;
    title: string;
    link: string;
}

const SolutionCard = ({ children, src, title, link }: SolutionCard) => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Icon src={src} />
            <Title>{translation(title)}</Title>
            <Subtext>{translation(children)}</Subtext>
            <Link to={`${link}`}>
                <Button>Read more</Button>
            </Link>
        </Wrapper>
    );
};

export default SolutionCard;
