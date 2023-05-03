import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth'
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

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth)
  }

  const info = {
    user,
    googleSignUp,
    githubSignUp,
    emailSignUp
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;