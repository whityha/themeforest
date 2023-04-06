import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ROUTES from '@/constants/Routes';

import './fonts.css';

const App = () => {
    return (
        <Routes>
            {ROUTES.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
};

export default App;
