import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
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