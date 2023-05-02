import React from 'react';
import Navbar from '../../components/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/shared/Footer/Footer';

const Account = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Account;