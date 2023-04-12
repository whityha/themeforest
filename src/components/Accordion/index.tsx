import React from 'react';
import { useTranslation } from 'react-i18next';

import AccordionItem from './AccordionItem';
import { Title } from './styled';

const Accordion = ({
    title = 'Services',
    data,
}: {
    title?: string;
    data: {
        id?: string;
        subtext: React.ReactNode;
        title: string;
    }[];
}) => {
    const { t } = useTranslation();
    return (
        <>
            <Title>{title}</Title>
            {data.map(({ id, subtext, title }) => (
                <AccordionItem key={id || title} title={t(title)}>
                    {typeof subtext === 'string' ? t(subtext) : subtext}
                </AccordionItem>
            ))}
        </>
    );
};

export default Accordion;
