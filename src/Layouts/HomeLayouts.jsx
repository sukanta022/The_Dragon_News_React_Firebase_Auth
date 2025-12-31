import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homeLayout/LeftAside';
import RightAside from '../Components/homeLayout/RightAside';

const HomeLayouts = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='grid grid-cols-12 gap-3 border-2'>
                <aside className='col-span-3 h-fit top-0 sticky'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 h-fit top-0 sticky'>
                    <RightAside></RightAside>
                </aside>
                
            </main>
        </div>
    );
};

export default HomeLayouts;