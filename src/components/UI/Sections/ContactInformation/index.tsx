import React from 'react';

import { Backgrounds } from '@/types';

import FlexBox from '../../FlexBox';

import { CONTACTS_LIST } from './config';
import ContactForm from './ContactForm';
import { ContactItem, Content, Subtext, Title, Wrapper } from './styled';

const SectionContactInformation = () => {
    return (
        <Wrapper background={Backgrounds.Grey}>
            <Content>
                <FlexBox rg={40} direction="column" w={40}>
                    <Title>Contact information</Title>
                    <Subtext>
                        Fill up the form and our Team will get back to you with 25 hours.
                    </Subtext>
                    <FlexBox direction="column" rg={20}>
                        {CONTACTS_LIST.map(({ icon, element }) => {
                            return (
                                <ContactItem key={icon} image={icon}>
                                    {element}
                                </ContactItem>
                            );
                        })}
                    </FlexBox>
                </FlexBox>
                <FlexBox w={50}>
                    <ContactForm />
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionContactInformation;
