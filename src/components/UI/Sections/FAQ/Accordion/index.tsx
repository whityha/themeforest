import React, { useState } from 'react';

import { ACCORDION_DATA } from '../config';

import AccordionItem from './AccordionItem';
import { Wrapper } from './styled';

const Accordion = () => {
    const [activeQuestion, setActiveQuestion] = useState<number>(-1);
    const handleQuestion = (id: number) => () => {
        setActiveQuestion((prevState) => (prevState === id ? -1 : id));
    };

    return (
        <Wrapper>
            {ACCORDION_DATA.map(({ title, subtext }, index) => {
                return (
                    <AccordionItem
                        active={activeQuestion === index}
                        onClick={handleQuestion(index)}
                        key={title}
                        title={title}
                    >
                        {subtext}
                    </AccordionItem>
                );
            })}
        </Wrapper>
    );
};

export default Accordion;
