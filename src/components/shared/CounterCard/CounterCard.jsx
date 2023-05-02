import React from 'react';

const CounterCard = () => {
  return (
    <div id="fullWidthTabContent" class="max-w-screen-xl mx-auto   dark:border-gray-600 ">
      <h1 className='my-header'>10 years of Cooking</h1>
      <div class=" p-4 bg-white rounded-lg  dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
        <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
            <dd class="text-gray-500 dark:text-gray-400">Chefs</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
            <dd class="text-gray-500 dark:text-gray-400">Unique recipe</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
            <dd class="text-gray-500 dark:text-gray-400">Trusted Company</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">$1B+</dt>
            <dd class="text-gray-500 dark:text-gray-400">Income per Month</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">90+</dt>
            <dd class="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
            <dd class="text-gray-500 dark:text-gray-400">Organizations</dd>
          </div>
        </dl>
      </div>
    </div>

  );
};

export default CounterCard;