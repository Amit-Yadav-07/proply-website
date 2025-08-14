
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import React from 'react';

const HomeLayout = () => (
    <>
        {/* <Navbar /> */}
        <main className="">
            <Outlet />
        </main>
    </>
);

export default HomeLayout;
