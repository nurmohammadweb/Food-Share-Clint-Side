import React, { useEffect, useState } from 'react';
import AllFoods from '../component/AllFoods';
import { useLoaderData } from 'react-router';
import Loading from '../component/Loading';

const AvailableFoods = () => {

     const loaderData = useLoaderData();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    if (loaderData) {
      setFoods(loaderData);
      setLoading(false);
    }
  }, [loaderData]);

  if (loading) {
    return <Loading />;
  }

   
  return (
    <div>
  
      <AllFoods foods={foods}></AllFoods>
    </div>
  );
};

export default AvailableFoods;