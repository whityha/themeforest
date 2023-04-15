import React from 'react';

import { Backgrounds } from '@/types';

import FlexBox from '../../FlexBox';

import { CONTACTS_LIST } from './config';
import ContactForm from './ContactForm';
import { ContactItem, ContactName, Content, Subtext, Title, Wrapper } from './styled';

const SectionContactUs = () => {
    return (
        <Wrapper background={Backgrounds.Grey}>
            <Content>
                <FlexBox rg={40} direction="column">
                    <Title>
                        Left questions? Contacts us now for a free consultation and free trial!
                    </Title>
                    <Subtext>
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                        suscipit laboriosam, nisi ut aliquid ex ea commodi.
                    </Subtext>
                    <FlexBox direction="column" rg={30}>
                        {CONTACTS_LIST.map(({ element, name }) => {
                            return (
                                <ContactItem key={name}>
                                    <ContactName>{name}</ContactName>
                                    {element}
                                </ContactItem>
                            );
                        })}
                    </FlexBox>
                </FlexBox>
                <FlexBox w={100} background={Backgrounds.White}>
                    <ContactForm />
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionContactUs;
