import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../component/Loading';

const RequestPrivate = ({children}) => {

  const { user,loading } = useContext(AuthContext);
   
    if (loading) {
    return<Loading></Loading>
  }
 
    if (user && user?.email) {
      return children
    }
    
  
  return  <Navigate to="/auth/regester"></Navigate>;
};

export default RequestPrivate;