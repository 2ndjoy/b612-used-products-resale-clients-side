import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Header/Navbar';
import { BsArrowDown } from 'react-icons/bs'
const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <label htmlFor='dashboard-drawer' className="btn btn-ghost lg:hidden mt-4">
                Dashboard <BsArrowDown></BsArrowDown>

            </label>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li className='bg-white'><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li className='bg-white'><Link to='/dashboard/addproduct'>Add a product</Link></li>
                        <li className='bg-white'><Link to='/dashboard/myproducts'>My Products</Link></li>
                        <li className='bg-white'><Link to='/dashboard/mybuyers'>My buyers</Link></li>
                        <li className='bg-white'><Link to='/dashboard/allseller'>All sellers</Link></li>
                        <li className='bg-white'><Link to='/dashboard/allbuyers'>All buyers</Link></li>
                        <li className='bg-white'><Link to='/dashboard/reporteditems'>Reported items</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default DashBoardLayout;