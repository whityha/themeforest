import React from 'react';

import useAccordion from '@/hooks/useAccordion';

import { Details, Main, Wrapper } from './styled';

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const { open, handleAccordion } = useAccordion();
    return (
        <Wrapper>
            <Main onClick={handleAccordion}>{title}</Main>
            <Details open={open}>{children}</Details>
        </Wrapper>
    );
};

export default AccordionItem;
