import React from 'react';

import Logo from '@/components/Logo';
import { Backgrounds } from '@/types';

import Navbar from './Navbar';
import { InnerWrapper, OuterWrapper } from './styled';
import VideoButton from './VideoButton';

const Header = ({ background }: { background: Backgrounds }) => {
    return (
        <OuterWrapper background={background}>
            <InnerWrapper>
                <Logo color={background === 'darkBlue' ? 'white' : 'blue'} />
                <Navbar light={background !== 'darkBlue'} />
                <VideoButton light={background === 'darkBlue'} />
            </InnerWrapper>
        </OuterWrapper>
    );
};

export default Header;
