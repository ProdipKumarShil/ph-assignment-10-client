import React, { createContext } from 'react';
import auth from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const user = {name: 'prodip'}

  

  const info = {
    user
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;