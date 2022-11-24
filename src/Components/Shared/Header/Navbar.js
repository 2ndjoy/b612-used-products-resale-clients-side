import React from 'react';
import { Link } from 'react-router-dom';
import KatherGhor from '../../../assets/KatherGhor.png';

const Navbar = () => {

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-amber-900'><Link>Item 1</Link></li>
                        <li className='text-amber-900'><Link href="">Item 2</Link></li>
                        <li className='text-amber-900'><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={KatherGhor} className='h-3/4' alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-amber-900'><Link>Item 1</Link></li>
                    <li className='text-amber-900'><Link href="">Item 2</Link></li>
                    <li className='text-amber-900'><Link to='/blogs'>Blogs</Link></li>

                </ul>
            </div>
            <div className="navbar-end lg:mr-24 mr-10">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="" src='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li tabIndex={1} className='text-amber-900'>
                            <Link to='/dashboard' className="justify-between">
                                Go to Dashboard
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li className='bg-white'><Link to='/dashboard/myorders'>My Orders</Link></li>
                                <li className='bg-white'><Link to='/dashboard/addproduct'>Add a product</Link></li>
                                <li className='bg-white'><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li className='bg-white'><Link to='/dashboard/mybuyers'>My buyers</Link></li>
                                <li className='bg-white'><Link to='/dashboard/allseller'>All sellers</Link></li>
                                <li className='bg-white'><Link to='/dashboard/allbuyers'>All buyers</Link></li>
                                <li className='bg-white'><Link to='/dashboard/reporteditems'>Reported items</Link></li>
                            </ul>
                        </li>
                        <li className="mt-2"><button className="btn btn-sm bg-amber-900 text-white btn-outline" >Logout</button></li>
                    </ul>
                </div> : <button className="btn btn-sm bg-amber-900 text-white btn-outline" ><Link to='/login'>Log in</Link></button>
            </div>
        </div >

    );
};

export default Navbar;