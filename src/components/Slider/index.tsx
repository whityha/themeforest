import React, { useState } from 'react';

import { Box, Button, HiddenBox, Title, TopBox, Wrapper } from './styled';
import { sliderOptions } from './types';

const Slider = ({ slides = [], visibleSlidersCount = 3, title, currentCard }: sliderOptions) => {
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
                <HiddenBox
                    currentCard={currentCard}
                    currentSlide={currentSlide}
                    count={slidesCount}
                >
                    {slides}
                </HiddenBox>
            </Box>
        </Wrapper>
    );
};

export default Slider;
