import React from 'react';

import FlexBox from '../../FlexBox';

import { Content, Image, Subtext, Title, Wrapper } from './styled';

const SectionAboutUsContent = () => {
    return (
        <Wrapper>
            <Content>
                <FlexBox cg={30}>
                    <FlexBox direction="column" rg={30} alignItems="start">
                        <Title>Who we are</Title>
                        <Subtext>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo.
                        </Subtext>
                        <Subtext>
                            Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
                            finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis
                            ultricies. Integer ante sapien, consequat et dolor vel, cursus lacinia
                            lectus.
                        </Subtext>
                    </FlexBox>
                    <Image src="/assets/images/aboutUs/1.webp" />
                </FlexBox>
                <FlexBox cg={30} direction="row-reverse" alignItems="start">
                    <FlexBox direction="column" rg={30}>
                        <Title>Our mission</Title>
                        <Subtext>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo.
                        </Subtext>
                        <Subtext>
                            Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
                            finibus consequat felis vel pretium.
                        </Subtext>
                    </FlexBox>
                    <Image src="/assets/images/aboutUs/2.webp" />
                </FlexBox>
            </Content>
        </Wrapper>
    );
};

export default SectionAboutUsContent;
