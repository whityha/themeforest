import React from 'react';
import { useTranslation } from 'react-i18next';

import { AccordionItem as AccordionItemType } from '@/types';

import FlexBox from '../UI/FlexBox';

import AccordionItem from './AccordionItem';
import { Title } from './styled';

const Accordion = <T extends AccordionItemType>({
    title = 'Services',
    data,
}: {
    title?: string;
    data: T[];
}) => {
    const { t } = useTranslation();
    return (
        <FlexBox direction="column">
            <Title>{title}</Title>
            {data.map(({ id, subtext, title }) => (
                <AccordionItem key={id || title} title={t(title)}>
                    {typeof subtext === 'string' ? t(subtext) : subtext}
                </AccordionItem>
            ))}
        </FlexBox>
    );
};

export default Accordion;
