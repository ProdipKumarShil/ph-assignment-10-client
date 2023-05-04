import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import ChefCard from '../ChefCard/ChefCard';

const ChefPage = () => {
  const {chefs} = useContext(AuthContext)
  console.log(chefs)
  return (
    <div className='max-w-screen-xl mx-auto p-8 text-center'>
      <h1 className='my-header mb-8'>Meet Our Chefs</h1>
      <div className="grid gap-4 justify-items-center md:grid-cols-3 mb-6 ">

        {chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)}
      </div>
    </div>
  );
};

export default ChefPage;