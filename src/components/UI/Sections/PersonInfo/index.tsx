import React from 'react';

import { TEAMMATES } from '@/constants/Mocks/OurTeam';

import FlexBox from '../../FlexBox';

import ContactForm from './ContactForm';
import {
    Content,
    Facebook,
    Info,
    Linkedin,
    Photo,
    PhotoContainer,
    QuestionTitle,
    Subtitle,
    Title,
    Wrapper,
} from './styled';

const SectionPersonInfo = ({ id }: { id?: string }) => {
    const { name, colorPicture, profession, description, linkedin, facebook } =
        TEAMMATES[Number(id!)];
    return (
        <Wrapper>
            <Content>
                <FlexBox w={100} cg={30}>
                    <PhotoContainer>
                        <Photo src={colorPicture} />
                    </PhotoContainer>
                    <Info>
                        <Title>Name</Title>
                        <Subtitle>{name}</Subtitle>
                        <Title>Position</Title>
                        <Subtitle>{profession}</Subtitle>
                        <Title>Description</Title>
                        <Subtitle>{description}</Subtitle>
                        <Title>Social networks</Title>
                        <FlexBox>
                            <Linkedin href={linkedin} />
                            <Facebook href={facebook} />
                        </FlexBox>
                    </Info>
                </FlexBox>
                <FlexBox cg={30}>
                    <QuestionTitle>Want {name} to share his expertise with you?</QuestionTitle>
                    <ContactForm personName={name} />
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionPersonInfo;
