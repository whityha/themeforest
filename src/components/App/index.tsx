import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ALL_ROUTES } from '@/routes';

import './fonts.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
    return (
        <Routes>
            {ALL_ROUTES.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
};

export default App;
