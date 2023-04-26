import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Slider from '@/components/Slider';
import TestimonialsCard from '@/components/UI/Cards/TestmonialsCard';
import { theme } from '@/theme';
import { Cards, SCREEN } from '@/types';

import { TESTIMONIALS } from './config';
import { Wrapper } from './styled';

const SectionTestimonials = ({ screenOnly }: { screenOnly?: SCREEN }) => {
    const [visibleSlidersCount] = useState(() => {
        if (window.innerWidth < theme.wrapperWidth.large) return 1;
        return 3;
    });
    const { t: translation } = useTranslation();
    return (
        <Wrapper screenOnly={screenOnly}>
            <Slider
                title={translation('Testimonials.title')}
                currentCard={Cards.Testimonials}
                visibleSlidersCount={visibleSlidersCount}
                slides={TESTIMONIALS.map(({ id, name, icon, whoIs, testimonial }) => {
                    return (
                        <TestimonialsCard
                            key={id}
                            options={{
                                name,
                                icon,
                                whoIs,
                                testimonial,
                            }}
                        />
                    );
                })}
            />
        </Wrapper>
    );
};

export default SectionTestimonials;
