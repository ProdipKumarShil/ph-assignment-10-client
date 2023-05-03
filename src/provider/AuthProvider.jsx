import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
  const user = {name: 'prodip'}

  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const githubSignUp = () => {
    return signInWithPopup(auth, gitProvider)
  }

  const info = {
    user,
    googleSignUp,
    githubSignUp
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;