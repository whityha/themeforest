import React from 'react';

import { Content, Image, Subtext, Wrapper } from './styled';

const MobileContent = () => {
    return (
        <Wrapper>
            <Image src="/assets/images/team/mobile.png" alt="teamImage" />
            <Content>
                <Subtext>
                    Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in
                    mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula
                    id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero.
                </Subtext>
                <Subtext>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla
                    rhoncus consectetur eros non iaculis.
                </Subtext>
            </Content>
        </Wrapper>
    );
};

export default MobileContent;
