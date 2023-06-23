import React from 'react';

import AccordionMobile from '@/components/AccordionMobile';
import { Title5 } from '@/theme/UI/Titles';

import { MOBILE_HEADER_MOCK, SOCIALS_MOBILE_HEADER } from './config';
import { Content, FollowUs, SocialItem, SocialList, Wrapper } from './styled';

const MobileHeader = ({ background }: { background: 'white' | 'darkBlue' }) => {
    return (
        <Wrapper background={background}>
            <Content>
                <AccordionMobile data={MOBILE_HEADER_MOCK} />
                <FollowUs>
                    <Title5>Follow Us</Title5>
                    <SocialList>
                        {SOCIALS_MOBILE_HEADER.map((item) => (
                            <SocialItem key={item} image={item} />
                        ))}
                    </SocialList>
                </FollowUs>
            </Content>
        </Wrapper>
    );
};

export default MobileHeader;
