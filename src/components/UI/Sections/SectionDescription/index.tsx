import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Title7 } from '@/theme/UI/Titles';

import { THESISES } from './config';
import {
    Container,
    Content,
    Description,
    Subtext,
    ThesisContainer,
    ThesisItem,
    Title,
    Wrapper,
} from './styled';

const SectionDescription = ({ id }: { id: string }) => {
    const [currentThesis, setCurrentThesis] = useState<number>(0);
    const refArray = useRef<HTMLDivElement[]>([]);
    const addToRefs = useCallback((el: HTMLDivElement | null, index: number) => {
        if (!el || refArray.current.includes(el)) return;
        refArray.current.splice(index, 0, el);
    }, []);

    const onScroll = () => {
        const index = refArray.current.findIndex((el) => {
            if (el.getBoundingClientRect().top > 100) return true;
            return false;
        });
        if (index !== -1) setCurrentThesis(index);
        else setCurrentThesis(refArray.current.length - 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <Wrapper>
            <Content>
                <ThesisContainer>
                    {THESISES[id as keyof typeof THESISES].map(({ id, title }, i) => {
                        return (
                            <ThesisItem key={id} active={currentThesis === i}>
                                <Title7>{title}</Title7>
                            </ThesisItem>
                        );
                    })}
                </ThesisContainer>
                <Description>
                    {THESISES[id as keyof typeof THESISES].map(({ id, title, subtext }, index) => {
                        return (
                            <Container
                                ref={(ele: HTMLDivElement) => addToRefs(ele, index)}
                                key={id}
                            >
                                <Title>{title}</Title>
                                <Subtext>{subtext}</Subtext>
                            </Container>
                        );
                    })}
                </Description>
            </Content>
        </Wrapper>
    );
};

export default SectionDescription;
