import React, { use } from 'react';
import Loading from '../component/Loading';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';


const FoodDetailsPrivate = ({children}) => {
  
  const { user,loading} = use(AuthContext);

    if (loading) {
    return<Loading></Loading>
  }
  if (user && user?.email) {
    return children
  }
  
  return <Navigate to="/auth/regester"></Navigate>;
};

export default FoodDetailsPrivate;