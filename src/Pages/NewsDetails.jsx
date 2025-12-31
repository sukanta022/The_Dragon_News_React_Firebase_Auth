import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import RightAside from '../Components/homeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import Header from '../Components/Header';
import NewsRead from '../Components/NewsRead';

const NewsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [news, setNews] = useState({})
    useEffect(() => {
        const newsDetails = data.find((singleNews)=> singleNews.id == id)
        setNews(newsDetails)
    },[data, id])
    return (
        <div >
            <header >
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-10 mt-10'>
                <section className='col-span-9'>
                    <NewsRead news={news}></NewsRead>
                </section>

                <aside className='col-span-3 h-fit sticky top-0'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;