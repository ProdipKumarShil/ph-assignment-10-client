import React from 'react';
import Banner from '../../components/shared/Banner/Banner';
import CounterCard from '../../components/shared/CounterCard/CounterCard';
import Hero from '../../components/shared/Hero/Hero';
import ChefSection from '../../components/shared/ChefSection/ChefSection';

const Main = () => {
  return (
    <div>
      <Banner></Banner>
      <CounterCard></CounterCard>
      <ChefSection></ChefSection>
      <Hero></Hero>
    </div>
  );
};

export default Main;