import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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

    return createPortal(
        <Wrapper onClick={handleClose} ref={wrapperRef}>
            <Content>{children}</Content>
        </Wrapper>,
        document.querySelector('body') as HTMLBodyElement
    );
};

export default Popup;
