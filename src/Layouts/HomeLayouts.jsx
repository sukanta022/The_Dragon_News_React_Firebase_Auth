import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';

const HomeLayouts = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <main>
                <section className='left-nav'></section>
                <Outlet></Outlet>
                <section className='right-nav'></section>
                
            </main>
        </div>
    );
};

export default HomeLayouts;