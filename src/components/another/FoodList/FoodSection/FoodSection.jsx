import React from 'react';
import SingleFood from '../SingleFood/SingleFood';

const FoodSection = () => {
  return (
    <div className='max-w-screen-xl mx-auto '>
      <h2 className='mb-4 mt-8 text-3xl font-semibold'>My recipes</h2>
      <SingleFood></SingleFood>
      <SingleFood></SingleFood>
      <SingleFood></SingleFood>
      <SingleFood></SingleFood>
      <SingleFood></SingleFood>
    </div>
  );
};

export default FoodSection;