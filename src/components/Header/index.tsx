import React, { useState } from 'react';

import Logo from '@/components/Logo';
import { Backgrounds } from '@/types';

import Popup from '../Popup';

import Navbar from './Navbar';
import { InnerWrapper, OuterWrapper } from './styled';
import VideoButton from './VideoButton';

const Header = ({ background }: { background: Backgrounds }) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    return (
        <>
            {isOpenPopup && (
                <Popup close={setIsOpenPopup}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/x--M8d7UBMM"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </Popup>
            )}
            <OuterWrapper background={background}>
                <InnerWrapper>
                    <Logo color={background === 'darkBlue' ? 'white' : 'blue'} />
                    <Navbar light={background !== 'darkBlue'} />
                    <VideoButton
                        onClick={() => setIsOpenPopup(true)}
                        light={background === 'darkBlue'}
                    />
                </InnerWrapper>
            </OuterWrapper>
        </>
    );
};

export default Header;
