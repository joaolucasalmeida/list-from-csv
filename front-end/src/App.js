import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersView from './views/UsersView/UsersView'; 

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UsersView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
