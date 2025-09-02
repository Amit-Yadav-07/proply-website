
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import React from 'react';
import EnhancedTwoSectionNavbar from './EnhanceNavbar';
import Footer from './Footer';

const HomeLayout = () => (
    <>
        <EnhancedTwoSectionNavbar />
        <main className="">
            <Outlet />
        </main>
        <Footer />
    </>
);

export default HomeLayout;
