import React from 'react';

import swimming from '../../assets/swimming.png'
import playground from '../../assets/playground.png'
import classimg from '../../assets/class.png'
import bg from '../../assets/bg.png'
const QZOne = () => {
    return (
        <div className='bg-[#F3F3F3] font-bold text-xl mb-5 mt-5 p-5'>
            <p>Qzone</p>
            <div className='flex flex-col justify-center items-center mb-5'>
                <img src={classimg} className='w-full' alt="" />
                <img src={playground} className='w-full' alt="" />
                <img src={swimming} className='w-full' alt="" />
            </div>
            
            <img src={bg} className='w-full' alt="" />
        </div>
    );
};

export default QZOne;