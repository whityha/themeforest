import React from 'react';

import { Content, Title, Wrapper } from './styled';

const AccordionItem = ({
    title,
    children,
    active,
    onClick,
}: {
    title: string;
    children: React.ReactNode;
    onClick: () => void;
    active?: boolean;
}) => {
    return (
        <Wrapper onClick={onClick} active={active}>
            <Title active={active}>{title}</Title>
            <Content active={active}>{children}</Content>
        </Wrapper>
    );
};

export default AccordionItem;
