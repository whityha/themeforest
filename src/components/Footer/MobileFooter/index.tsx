import React from 'react';

import AccordionMobile from '@/components/AccordionMobile';
import Logo from '@/components/Logo';
import FlexBox from '@/components/UI/FlexBox';
import { Title5 } from '@/theme/UI/Titles';

import { MOBILE_FOOTER_MOCK, SOCIALS_MOBILE_FOOTER } from './config';
import { Content, FollowUs, Reserved, SocialItem, SocialList, Subtext, Wrapper } from './styled';

const MobileFooter = () => {
    return (
        <Wrapper background="darkBlue">
            <Content>
                <Logo color="white" />
                <AccordionMobile dark data={MOBILE_FOOTER_MOCK} />
                <FollowUs>
                    <Title5>Follow Us</Title5>
                    <SocialList>
                        {SOCIALS_MOBILE_FOOTER.map((item) => (
                            <SocialItem key={item} image={item} />
                        ))}
                    </SocialList>
                </FollowUs>
                <FlexBox cg={20}>
                    <Subtext>Private policy</Subtext>
                    <Subtext>Terms of us</Subtext>
                </FlexBox>
                <Reserved>Ensome© 2022 All Rights Reserved</Reserved>
            </Content>
        </Wrapper>
    );
};

export default MobileFooter;
