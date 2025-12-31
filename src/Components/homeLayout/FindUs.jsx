import React from 'react';
import { FaFacebook,FaInstagramSquare,FaTwitter } from "react-icons/fa";
const FindUs = () => {
    return (
        <div className='mt-5'>
            <p className='font-bold text-xl mb-5'>Find Us</p>
            <div className="join join-vertical w-full ">
                <button className="btn join-item justify-start py-6 bg-white"><FaFacebook size={24} /> Facebook</button>
                <button className="btn join-item justify-start py-6 bg-white"><FaTwitter size={24} /> Twitter</button>
                <button className="btn join-item justify-start py-6 bg-white"><FaInstagramSquare size={24}/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;