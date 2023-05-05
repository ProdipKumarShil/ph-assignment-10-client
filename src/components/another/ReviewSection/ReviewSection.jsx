import React from 'react';
import Marquee from 'react-fast-marquee';
import Review from '../Review/Review';

const ReviewSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className='text-4xl text-center font-semibold'>Review from Clients</h1>
      <Marquee>
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </Marquee>
    </div>
  );
};

export default ReviewSection;