import React from 'react';
import { useTranslation } from 'react-i18next';

import useAccordion from '@/hooks/useAccordion';

import { Arrow, Details, LinkItem, Main, Wrapper } from './styled';

export interface AccordionItem {
    id: number;
    title: string;
    links: {
        name: string;
        path: string;
    }[];
    dark?: boolean;
}

const AccordionItem = ({ title, links, id, dark }: AccordionItem) => {
    const { open, handleAccordion } = useAccordion();
    const { t: translate } = useTranslation();
    return (
        <Wrapper dark={dark}>
            <Main onClick={handleAccordion}>
                {title}
                <Arrow isOpen={open} />
            </Main>
            <Details isOpen={open}>
                {links.map(({ name, path }) => {
                    return (
                        <LinkItem dark={dark} key={path}>
                            {translate(name)}
                        </LinkItem>
                    );
                })}
            </Details>
        </Wrapper>
    );
};

export default AccordionItem;
