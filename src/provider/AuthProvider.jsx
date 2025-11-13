import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  
     const [loading, setLoading] = useState(true);

  console.log(loading, user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
    const signIn = (email, password) => {
    setLoading(true);
     return signInWithEmailAndPassword    (auth,     email, password);
   };
  //logout
  const logOut = () => {
    return signOut(auth);
  }
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)

    
  }
   
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      console.log(currentUser)
    })
    return () => unsubscribe();
  }, [])

  const authData = {
      user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    googleLogin
  }
   
  return <AuthContext value={authData}>{children}</AuthContext> ;
};

export default AuthProvider;

