import React from 'react';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main1 = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main1;