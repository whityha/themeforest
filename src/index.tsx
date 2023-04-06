import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './i18next';

import App from './components/App';
import GlobalStyle from './theme/globalStyle';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
