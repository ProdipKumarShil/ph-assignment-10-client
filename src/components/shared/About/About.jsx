import React from 'react';
import Lottie from "lottie-react";
import about_us from '../../../assets/anim/77877-about-us.json'
const About = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-8 grid md:grid-cols-2'>
      <div className="">
        <Lottie className='w-full mx-auto' animationData={about_us}></Lottie>
      </div>
      <div className="">
        <h1 className='text-4xl mb-4 font-semibold'>About Us</h1>
        <p className='text-slate-600'>Welcome to our chef website! We are a team of passionate chefs who have dedicated our lives to creating delicious and unforgettable culinary experiences for our customers.
          Our journey began with a shared love of food and a desire to explore the endless possibilities of the culinary world. We have traveled far and wide, seeking out the best ingredients, techniques, and flavors from around the globe. From classic French cuisine to bold and spicy Thai dishes, we have studied and mastered a wide range of cooking styles and culinary traditions.
          At the heart of our work is a commitment to using only the freshest and highest quality ingredients. We believe that great food starts with great ingredients, and we work tirelessly to ensure that every dish we create is made with the finest meats, produce, and spices available.
        </p>
      </div>
    </div>
  );
};

export default About;