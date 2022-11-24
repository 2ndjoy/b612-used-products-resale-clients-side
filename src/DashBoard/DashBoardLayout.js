import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Header/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>

    );
};

export default DashBoardLayout;