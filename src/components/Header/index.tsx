import React from 'react';

import Logo from '@/components/UI/Logo';

import Navbar from './Navbar';
import { InnerWrapper, OuterWrapper } from './styled';
import VideoButton from './VideoButton';

const Header = ({ background }: { background: 'darkBlue' | 'background' | 'white' }) => {
    return (
        <OuterWrapper background={background}>
            <InnerWrapper>
                <Logo color="blue" />
                <Navbar />
                <VideoButton />
            </InnerWrapper>
        </OuterWrapper>
    );
};

export default Header;
