import React from 'react';

import { TEAMMATES } from '@/constants/Mocks/OurTeam';

import TeamCard from '../../Cards/TeamCard';

import { Content, Wrapper } from './styled';

const SectionTeamCards = () => {
    return (
        <Wrapper>
            <Content>
                {TEAMMATES.map((teammate) => (
                    <TeamCard key={teammate.id} options={teammate} />
                ))}
            </Content>
        </Wrapper>
    );
};

export default SectionTeamCards;
