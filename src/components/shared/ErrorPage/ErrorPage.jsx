import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Lottie from "lottie-react";
import catErr from '../../../assets/anim/cat-err.json'

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto p-8">
      <h1 className='text-center text-5xl font-bold'>Page not found</h1>
        <Lottie className='w-1/2 text-center mx-auto' animationData={catErr}></Lottie>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;