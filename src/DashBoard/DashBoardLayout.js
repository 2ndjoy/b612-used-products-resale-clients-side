import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Header/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>
        </div>

    );
};

export default DashBoardLayout;