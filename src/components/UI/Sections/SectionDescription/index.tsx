import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SOLUTIONS_PAGE_DATA } from '@/constants/Mocks/Solutions';
import { Title7 } from '@/theme/UI/Titles';

import { TOP_INDENT_END, TOP_INDENT_START } from './config';
import {
    Container,
    Content,
    Description,
    Image,
    Subtext,
    ThesisContainer,
    ThesisItem,
    Title,
    Wrapper,
} from './styled';

const SectionDescription = ({ id }: { id?: string }) => {
    const [currentThesis, setCurrentThesis] = useState<number>(0);
    const { t: translation } = useTranslation();
    const refArray = useRef<HTMLDivElement[]>([]);

    const solution = SOLUTIONS_PAGE_DATA[id!];

    const addToRefs = useCallback((el: HTMLDivElement | null, index: number) => {
        if (!el || refArray.current.includes(el)) return;
        refArray.current.splice(index, 0, el);
    }, []);

    const onScroll = () => {
        const index = refArray.current.findIndex((el) => {
            const { top } = el.getBoundingClientRect();
            if (top > TOP_INDENT_START && top < TOP_INDENT_END) return true;
            return false;
        });
        if (index !== -1) setCurrentThesis(index);
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
                    {solution.thesis.map(({ id, title }, i) => {
                        return (
                            <ThesisItem key={id} active={currentThesis === i}>
                                <Title7>{translation(title)}</Title7>
                            </ThesisItem>
                        );
                    })}
                </ThesisContainer>
                <Description>
                    {solution.thesis.map(({ id, title, subtext, image }, index) => {
                        return (
                            <Container
                                ref={(ele: HTMLDivElement) => addToRefs(ele, index)}
                                key={id}
                            >
                                <Title>{translation(title)}</Title>
                                {image && <Image src={image} alt="imageSolution" />}
                                <Subtext>{translation(subtext)}</Subtext>
                            </Container>
                        );
                    })}
                </Description>
            </Content>
        </Wrapper>
    );
};

export default SectionDescription;
