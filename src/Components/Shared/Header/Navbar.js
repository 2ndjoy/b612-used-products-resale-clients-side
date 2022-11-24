import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkLightContext } from '../../../Context/DarkandLightModeProvider';
import { FaMoon, FaSun } from 'react-icons/fa';

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
        <div className='flex gap-5'>
            <h2>This is navbar</h2>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Register</Link>
            <Link to='/about'>About</Link>
            <div className="navbar-end">
                {theme ? <button className='btn btn-ghost' onClick={handleNight}>
                    <FaMoon />
                </button> : <button className='btn btn-ghost' onClick={handleDay}><FaSun /></button>}
            </div>
        </div>
    );
};

export default Navbar;