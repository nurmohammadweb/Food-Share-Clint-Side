import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const MainLayout = () => {
  return (
    <div className=' bg-green-100'>
      <div className=''>
      <Navbar></Navbar>

      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;