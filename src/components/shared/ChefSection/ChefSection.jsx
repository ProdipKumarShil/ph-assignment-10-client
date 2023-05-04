import React, { useContext } from 'react';
import chef2 from '../../../assets/chef/chef2.png'
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";
import ChefCard from '../../another/ChefCard/ChefCard';
import { AuthContext } from '../../../provider/AuthProvider';


const ChefSection = () => {
  const {chefs} = useContext(AuthContext)
  console.log(chefs)

  if(chefs){
    return (
      <div className='max-w-screen-xl mx-auto p-8 text-center'>
        <h1 className='my-header mb-8'>Meet Our Chefs</h1>
        <div className="grid gap-4 justify-items-center md:grid-cols-3 mb-6 ">
          
          {chefs.slice(0, 6).map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)}
        </div>
        <Link to='/chefs' className='btn text-xl  font-bold rounded px-8 mx-auto'>Show More</Link>
      </div>
    );
  }
  else{
    return <Loader></Loader>
  }
  
};

export default ChefSection;