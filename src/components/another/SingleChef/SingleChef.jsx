import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleChef = () => {
  const myChef = useLoaderData()
  const {name, bio, img, exp, recipe, likes} = myChef
  return (
    <div className='max-w-screen-xl mx-auto p-8 text-center'>

      <div href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-l-lg" src={img} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bio}</p>
            <p>Experience: {exp}</p>
            <p>Likes: {likes}</p>
            <p>Recipes: {recipe}</p>
          </div>
      </div>

    </div>
  );
};

export default SingleChef;