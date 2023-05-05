import React from 'react';
import Lottie from "lottie-react";
import loader from '../../../assets/anim/burger-loader.json';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Loader = () => {
  return (
    <div className="">
      <div className='max-w-screen-xl mx-auto p-8'>
        <Lottie className='w-1/2 text-center mx-auto' animationData={loader}></Lottie>

      </div>
    </div>
  );
};

export default Loader;