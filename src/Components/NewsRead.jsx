import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeftLong } from "react-icons/fa6";
const NewsRead = ({news}) => {
    return (
        <div className='space-y-5'>
            <img src={news.image_url} className='w-full h-[500px]' alt="" />
            <h1 className='font-bold text-3xl'>{news.title}</h1>
            <p className='text-xl'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn text-white bg-[#D72050] mt-6 text-xl p-7'><FaArrowLeftLong size={24}/> All news in this category</Link>
        </div>
    );
};

export default NewsRead;