import React, { useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { Content, Wrapper } from './styled';

interface Popup {
    close: (arg: boolean) => void;
    children?: React.ReactNode;
}

const Popup = ({ children, close }: Popup) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        if (wrapperRef.current) enableBodyScroll(wrapperRef.current);
        close(false);
    };

    useEffect(() => {
        if (wrapperRef.current) disableBodyScroll(wrapperRef.current);
    }, []);

    return (
        <Wrapper onClick={handleClose} ref={wrapperRef}>
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default Popup;
