import React from 'react';
import Banner from '../component/Banner';
 import { useLoaderData } from 'react-router';

import OurMission from '../component/OurMission';
import PlateShareWork from '../component/PlateShareWork';
import TopSixFoods from '../component/TopSixFoods';

const Home = () => {
  const foods = useLoaderData();
  console.log(foods);

  return (
   <div>
      <Banner />
      <TopSixFoods foods={foods}></TopSixFoods>
      <OurMission></OurMission>
      <PlateShareWork></PlateShareWork>
      
    </div>
  );
};

export default Home;