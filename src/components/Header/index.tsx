import React, { useState } from 'react';

import Logo from '@/components/Logo';
import { Backgrounds } from '@/types';

import Popup from '../Popup';

import { BURGER_IMAGE, X_IMAGE } from './config';
import MobileHeader from './MobileHeader';
import Navbar from './Navbar';
import { Burger, InnerWrapper, Wrapper } from './styled';
import VideoButton from './VideoButton';

const Header = ({ background }: { background: Backgrounds }) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [isOpenBurger, setIsOpenBurger] = useState(false);
    const handlePopup = () => {
        setIsOpenPopup(true);
    };
    const handleBurger = () => {
        setIsOpenBurger((prev) => !prev);
    };
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
            <Wrapper background={background}>
                <InnerWrapper>
                    <Logo color={background === 'darkBlue' ? 'white' : 'blue'} />
                    <Navbar light={background !== 'darkBlue'} />
                    <VideoButton onClick={handlePopup} light={background === 'darkBlue'} />
                    <Burger
                        onClick={handleBurger}
                        src={isOpenBurger ? X_IMAGE : BURGER_IMAGE}
                        alt="burger"
                    />
                </InnerWrapper>
                {isOpenBurger && (
                    <MobileHeader background={background === 'darkBlue' ? 'darkBlue' : 'white'} />
                )}
            </Wrapper>
        </>
    );
};

export default Header;
