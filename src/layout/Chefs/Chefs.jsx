import React from 'react';
import Navbar from '../../components/shared/Navbar/Navbar';
import Footer from '../../components/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Chefs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Chefs;