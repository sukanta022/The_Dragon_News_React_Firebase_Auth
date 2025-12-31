import React from 'react';
import { NavLink } from 'react-router';
import login from '../assets/login.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-5 flex-wrap'>
            <div className='hidden md:block'></div>

            <div className='flex gap-3 md:gap-5 text-[#828181]'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>

            <div className='flex gap-2 justify-center items-center'>
                <img src={login} alt="" />
                <button className='btn px-7 py-3 text-[18px] text-white font-semibold bg-[#403F3F]'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;