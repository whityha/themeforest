import React from 'react';

import FlexBox from '../UI/FlexBox';

import AccordionItem, { AccordionItem as AccordionItemType } from './AccordionItem';

interface Accordion<T> {
    data: T[];
    dark?: boolean;
}

const AccordionMobile = <T extends AccordionItemType>({ data, dark }: Accordion<T>) => {
    return (
        <FlexBox direction="column">
            {data.map(({ id, links, title }) => (
                <AccordionItem dark={dark} id={id} key={id} title={title} links={links} />
            ))}
        </FlexBox>
    );
};

export default AccordionMobile;
