import React from 'react';
import { useTranslation } from 'react-i18next';

import { AccordionItem as AccordionItemType } from '@/types';

import FlexBox from '../UI/FlexBox';

import AccordionItem from './AccordionItem';
import { Title } from './styled';

interface Accordion<T> {
    title?: string;
    data: T[];
}

const Accordion = <T extends AccordionItemType>({ title = 'Services', data }: Accordion<T>) => {
    const { t: translation } = useTranslation();
    return (
        <FlexBox direction="column">
            <Title>{title}</Title>
            {data.map(({ id, subtext, title }) => (
                <AccordionItem key={id || title} title={translation(title)}>
                    {typeof subtext === 'string' ? translation(subtext) : subtext}
                </AccordionItem>
            ))}
        </FlexBox>
    );
};

export default Accordion;
