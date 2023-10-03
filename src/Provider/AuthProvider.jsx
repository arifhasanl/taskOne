
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase.config";

export const AuthContext=createContext(null);
const auth=getAuth(app)
const AuthProvider = ({children}) => {
const [loading,setLoading]=useState(true);
const [user,setUser]=useState(null);
const provider = new GoogleAuthProvider();
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
        
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }

   const signInGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth,provider)
   }
   const upDateUser=(name,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo,
    })
   }
   useEffect(()=>{
        onAuthStateChanged(auth,result=>{
            setUser(result);
            setLoading(false)
        })
   },[])
    const userInfo={
        user,
        loading,
        createUser,
        login,
        logOut,
        signInGoogle,
        upDateUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;