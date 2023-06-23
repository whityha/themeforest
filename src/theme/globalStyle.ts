import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
    }
    body {
        overflow-x: hidden;
        font-family: 'Open Sans';
    }
    a {
        color: inherit;
    }
    a:hover {
        text-decoration: none;
    }
    button {
        outline: none;
        border: none;
        background: none;
    }
`;
