import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex justify-center items-center p-2 gap-5 bg-[#F3F3F3] mt-5'>
            <p className='bg-[#D72050] text-xl font-semibold text-white p-3'>Latest</p>

            <Marquee>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, culpa. Placeat, suscipit libero et eos soluta, qui vero amet atque iure sequi maiores in hic animi quod possimus!</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;