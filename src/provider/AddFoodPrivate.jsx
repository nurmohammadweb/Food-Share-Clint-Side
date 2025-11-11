import React, { Children } from 'react';
import { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../component/Loading';

const AddFoodPrivate = ({children}) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return<Loading></Loading>
  }
  if (user && user?.email) {
    return children
  }
  

  return<Navigate to="/auth/regester"></Navigate>
  ;
};

export default AddFoodPrivate;