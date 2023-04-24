import { DefaultTheme } from 'styled-components';

export const getWrapperWidth = (theme: DefaultTheme) => {
    return theme.wrapperWidth.large;
};

export const getWrapperWidthMobile = (theme: DefaultTheme) => {
    return theme.wrapperWidth.small;
};
