import { createContext, useContext, useEffect, useState } from 'react';

import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth, db } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
  } from 'firebase/auth';
  import {setDoc,doc} from 'firebase/firestore'
 
const AuthContext = createContext();
//seeee**********************
//sss************************
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (e) {
      return rejectWithValue(e.code);
    }
  }
);
export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    

    
    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
          savedShows: []
      })
      }

      function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
      }


      function logOut() {
        return signOut(auth);
      }
      
     useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
          {children}
        </AuthContext.Provider>
      );

}

export function UserAuth() {
    return useContext(AuthContext);
  }
 