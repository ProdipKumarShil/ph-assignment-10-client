import React from 'react';
import Lottie from "lottie-react";
import animation from '../../../assets/anim/banner-lottie.json'
import { Link } from 'react-router-dom';
import { GiCookingPot } from "react-icons/gi";

const Banner = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-8 grid md:grid-cols-2  items-center '>
      <div className="order-2 md:order-1">
        <h1 className='text-7xl font-bold mb-4'>Authentic Indian Recipes from Master Chef</h1>
        <p className='text-slate-600 mb-8'>Welcome to our Indian Chef website, where you'll find a treasure trove of authentic and mouth-watering Indian recipes, curated by our master chef with decades of experience in the art of Indian cooking. Our recipes showcase the vibrant and diverse flavors of India, ranging from spicy curries to sweet desserts. </p>
        <Link to='/chefs' className='btn rounded-lg flex items-center w-36 justify-center font-bold text-gray-300 gap-3'>Learn More <GiCookingPot className='text-xl' /></Link>
      </div>
      <div className="order-1 md:order-2 mb-6 md:m-0">
        <Lottie animationData={animation}/>
      </div>
    </div>
  );
};

export default Banner;