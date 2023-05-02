import React from 'react';
import Navbar from '../../components/shared/Navbar/Navbar';
import Banner from '../../components/shared/Banner/Banner';
import Pricing from '../../components/shared/Pricing/Pricing';
import CounterCard from '../../components/shared/CounterCard/CounterCard';
import Hero from '../../components/shared/Hero/Hero';
import Footer from '../../components/shared/Footer/Footer';
import ChefSection from '../../components/shared/ChefSection/ChefSection';
import Login from '../../components/Account/Login/Login';
import Register from '../../components/Account/Register/Register';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <CounterCard></CounterCard>
      <ChefSection></ChefSection>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
};

export default Home;