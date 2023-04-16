import React from 'react';
import { Link } from 'react-router-dom';

import { TeammatePerson } from '@/constants/Mocks/OurTeam';

import { Container, Facebook, Image, Linkedin, Name, Profession, Socials, Wrapper } from './styled';

const TeamCard = ({
    options: { picture, name, profession, id, linkedin, facebook },
}: {
    options: TeammatePerson;
}) => {
    return (
        <Wrapper>
            <Link to={`/team/${id}`}>
                <Image src={picture} />
                <Container>
                    <Name>{name}</Name>
                    <Profession>{profession}</Profession>
                </Container>
            </Link>
            <Socials>
                <Linkedin href={linkedin} />
                <Facebook href={facebook} />
            </Socials>
        </Wrapper>
    );
};

export default TeamCard;
