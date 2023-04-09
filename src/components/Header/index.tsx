import React from 'react';

import Logo from './Logo';
import Navbar from './Navbar';
import { InnerWrapper, OuterWrapper } from './styled';
import VideoButton from './VideoButton';

const Header = () => {
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Logo />
                <Navbar />
                <VideoButton />
            </InnerWrapper>
        </OuterWrapper>
    );
};

export default Header;
