import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import login from '../assets/login.png'
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const {user, userSignOut} = use(AuthContext)

    const handleLogOut = () =>{
        userSignOut()
    }
    return (
        <div className='flex justify-between items-center mt-5 flex-wrap'>
            <div className=''>
                {
                    user && <p>{user.email}</p>
                }
            </div>

            <div className='flex gap-3 md:gap-5 text-[#828181]'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>

            <div className='flex gap-2 justify-center items-center'>
                <img src={login} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn px-7 py-3 text-[18px] text-white font-semibold bg-[#403F3F]'>Log out</button> : <Link to={'/login'} className='btn px-7 py-3 text-[18px] text-white font-semibold bg-[#403F3F]'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;