import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut 
} from 'firebase/auth';

import React, { useEffect, useState, createContext } from 'react';
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(); // FIXED

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const registerWithEmailPassword = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const handleGoogleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authdata = {
    registerWithEmailPassword,
    handleGoogleSignin,
    userLogin,
    userLogout,
    setUser,
    user,
    loading
  };

  return (
    <AuthContext.Provider value={authdata}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
