import React, { useEffect, useRef, useState } from 'react';

import TeamCard from '@/components/UI/Cards/TeamCard';
import { TEAMMATES } from '@/constants/Mocks/OurTeam';

import { ADD_CARDS_COUNT, START_CARDS_COUNT } from './config';
import { Content, Wrapper } from './styled';

const SectionTeamCards = () => {
    const [cardsCount, setCardsCount] = useState<number>(START_CARDS_COUNT);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const onScroll = () => {
        if (containerRef.current) {
            const { bottom } = containerRef.current.getBoundingClientRect();
            if (bottom - window.innerHeight < 100) {
                setCardsCount((prevState) => prevState + ADD_CARDS_COUNT);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    return (
        <Wrapper>
            <Content ref={containerRef}>
                {TEAMMATES.slice(0, cardsCount).map((teammate) => (
                    <TeamCard key={teammate.id} options={teammate} />
                ))}
            </Content>
        </Wrapper>
    );
};

export default SectionTeamCards;
