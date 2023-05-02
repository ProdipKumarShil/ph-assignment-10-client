import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../../assets/imgs/google-g.png'
import git from '../../../assets/imgs/git-g.png'
import mail from '../../../assets/imgs/email.png'

const Register = () => {
  return (
    <div>
      <form className='w-full md:w-1/2 px-8 py-4 mx-auto'>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
          <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
        </div>
        <div className="mb-6">
          <label htmlFor="photo_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo Url</label>
          <input type="text" id="photo_url" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="photo url" required />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        <p className='text-center my-4'><small>Already have an account? <Link className='text-blue-700 underline'>Login</Link></small></p>
      </form>
      <div className="">
        <Link className='flex mx-auto mb-2 items-center gap-2 border w-[40%] md:w-[20%] p-2 rounded-full'><img className='w-8' src={mail} alt="" /> <span className='font-semibold text-xl'>Continue with Email</span></Link>
        <Link className='flex mx-auto mb-2 items-center gap-2 border w-[40%] md:w-[20%] p-2 rounded-full'><img className='w-8' src={google} alt="" /> <span className='font-semibold text-xl'>Continue with Google</span></Link>
        <Link className='flex mx-auto mb-2 items-center gap-2 border w-[40%] md:w-[20%] p-2 rounded-full'><img className='w-8' src={git} alt="" /> <span className='font-semibold text-xl'>Continue with Git-Hub</span></Link>
      </div>
    </div>
  );
};

export default Register;