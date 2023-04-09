import React, { useState } from 'react';

import { Box, Button, HiddenBox, Title, TopBox, Wrapper } from './styled';

const Slider = ({
    slides = [],
    visibleSlidersCount = 3,
    title,
}: {
    visibleSlidersCount?: number;
    slides: Array<any>;
    title: string;
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides?.length;

    const goNext = (): void => {
        setCurrentSlide(currentSlide + 1);
    };
    const goPrev = (): void => {
        setCurrentSlide(currentSlide - 1);
    };

    return (
        <Wrapper>
            <TopBox>
                <Title>{title}</Title>
                <Button
                    disabled={currentSlide === 0}
                    direction="left"
                    type="button"
                    onClick={goPrev}
                />
                <Button
                    disabled={currentSlide === slidesCount - visibleSlidersCount}
                    direction="right"
                    type="button"
                    onClick={goNext}
                />
            </TopBox>
            <Box>
                <HiddenBox currentSlide={currentSlide} count={slidesCount}>
                    {slides}
                </HiddenBox>
            </Box>
        </Wrapper>
    );
};

export default Slider;
