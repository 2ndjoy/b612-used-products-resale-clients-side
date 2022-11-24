import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkLightContext } from '../../../Context/DarkandLightModeProvider';
import { FaMoon, FaSun } from 'react-icons/fa';
import KatherGhor from '../../../assets/KatherGhor.png';

const Navbar = () => {
    const { theme, setTheme } = useContext(DarkLightContext);
    const handleNight = () => {
        const newTheme = false;
        setTheme(newTheme);
    }
    const handleDay = () => {
        const newTheme = true;
        setTheme(newTheme);

    }
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
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="" src='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/dashboard' className="justify-between">
                                Go to Dashboard
                            </Link>
                        </li>
                        <li className="mt-2"><button className="btn btn-sm btn-outline" >Logout</button></li>
                    </ul>
                </div> : <button className="btn btn-sm btn-outline" ><Link to='/login'>Log in</Link></button>
            </div>
        </div>


        // <div className="navbar-end">
        //     {theme ? <button className='btn btn-ghost' onClick={handleNight}>
        //         <FaMoon />
        //     </button> : <button className='btn btn-ghost' onClick={handleDay}><FaSun /></button>}
        // </div>

    );
};

export default Navbar;