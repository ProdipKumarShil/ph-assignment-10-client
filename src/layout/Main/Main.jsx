import React from 'react';
import Banner from '../../components/shared/Banner/Banner';
import CounterCard from '../../components/shared/CounterCard/CounterCard';
import Hero from '../../components/shared/Hero/Hero';
import ChefSection from '../../components/shared/ChefSection/ChefSection';
import Review from '../../components/another/Review/Review';
import ReviewSection from '../../components/another/ReviewSection/ReviewSection';

const Main = () => {
  return (
    <div>
      <Banner></Banner>
      <CounterCard></CounterCard>
      <ChefSection></ChefSection>
      <ReviewSection></ReviewSection>
      <Hero></Hero>
    </div>
  );
};

export default Main;