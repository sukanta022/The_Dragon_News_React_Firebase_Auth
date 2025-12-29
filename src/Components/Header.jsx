import React from 'react';
import logo from '../assets/The Dragon News.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-6 md:mt-10 space-y-3'>
            <img src={logo} className='w-[320px] md:w-[400px] mb-4' alt="" />
            <p className='text-[#9C9C9C]'>Journalism Without Fear or Favour</p>
            
            <p className='text-[#939393] font-semibold'>{ format(new Date(), "EEEE, MMMM MM, yyyy" ) }</p>
            
        </div>
    );
};

export default Header;