import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {
const [user, setUser] = useState({})

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, 
      (loggedInUser) => {
        setUser(loggedInUser);
      })
      return () => {
        unSubscribe()
      }
  }, [])

  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const githubSignUp = () => {
    return signInWithPopup(auth, gitProvider)
  }

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const info = {
    googleSignUp,
    githubSignUp,
    emailSignUp,
    user,
    logOut
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;