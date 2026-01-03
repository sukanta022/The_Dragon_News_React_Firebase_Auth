import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (result, profile) =>{
        return updateProfile(result, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log("cuurnet user in auth state change",  currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const userSignOut = () => {
        return signOut(auth)
    }

    const userSignIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        userSignOut,
        userSignIn,
        loading,
    }

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;