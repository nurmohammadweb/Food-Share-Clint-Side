import React from 'react';
import Banner from '../component/HeroSection';
 import { useLoaderData } from 'react-router';

import OurMission from '../component/OurMission';
import PlateShareWork from '../component/PlateShareWork';
import TopSixFoods from '../component/TopSixFoods';
import HeroSection from '../component/HeroSection';

const Home = () => {
  const foods = useLoaderData();
  console.log(foods);

  return (
   <div>
      <div className='p-10'>
        <HeroSection></HeroSection>
       </div>
      <TopSixFoods foods={foods}></TopSixFoods>
      <OurMission></OurMission>
      <PlateShareWork></PlateShareWork>
      
    </div>
  );
};

export default Home;