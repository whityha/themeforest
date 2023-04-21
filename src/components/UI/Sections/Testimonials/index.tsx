import React from 'react';
import { useTranslation } from 'react-i18next';

import Slider from '@/components/Slider';
import TestimonialsCard from '@/components/UI/Cards/TestmonialsCard';
import { Cards } from '@/types';

import { TESTIMONIALS } from './config';
import { Wrapper } from './styled';

const SectionTestimonials = () => {
    const { t: translation } = useTranslation();
    return (
        <Wrapper>
            <Slider
                title={translation('Testimonials.title')}
                currentCard={Cards.Testimonials}
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
