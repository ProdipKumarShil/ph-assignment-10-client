import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {
const [user, setUser] = useState({})
const [chefs, setChefs] = useState([])

  

  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const githubSignUp = () => {
    return signInWithPopup(auth, gitProvider)
  }

  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const updateUser = userInfo => {
    return updateProfile(auth.currentUser, userInfo)
  }

  // load chefs data
  useEffect(() => {
    fetch('https://indiana-chef-server-prodipkumarshil.vercel.app/chefs')
      .then(res => res.json())
      .then(data => setChefs(data))
  },[])

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,
      (loggedInUser) => {
        setUser(loggedInUser);
        
      })
    return () => {
      unSubscribe()
    }
  }, [])


  const info = {
    googleSignUp,
    githubSignUp,
    emailSignUp,
    emailSignIn,
    user,
    logOut,
    chefs,
    updateUser
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;