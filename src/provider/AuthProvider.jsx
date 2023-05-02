import React, { createContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
  const user = {name: 'prodip'}

  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const info = {
    user,
    googleSignUp,
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;