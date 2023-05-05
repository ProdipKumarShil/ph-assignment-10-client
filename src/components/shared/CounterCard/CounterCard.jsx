import React from 'react';
// import CountUp from 'react-countup/build/CountUp';
import CountUp from 'react-countup';

const CounterCard = () => {
  return (
    <div id="fullWidthTabContent" className="max-w-screen-xl mx-auto   dark:border-gray-600 ">
      <h1 className='my-header'>10 years of Cooking</h1>
      <div className=" p-4 bg-white rounded-lg  dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
        <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold"><CountUp end={73} duration={5}></CountUp>M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Chefs</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold"><CountUp end={100} duration={5}></CountUp>M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Unique recipe</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold"><CountUp end={1000} duration={5}></CountUp></dt>
            <dd className="text-gray-500 dark:text-gray-400">Trusted Company</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">$<CountUp end={1} duration={5}></CountUp>B+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Income per Month</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold"><CountUp end={90} duration={5}></CountUp>+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold"><CountUp end={30} duration={5}></CountUp>M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
          </div>
        </dl>
      </div>
    </div>

  );
};

export default CounterCard;