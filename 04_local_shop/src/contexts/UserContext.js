import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    
    //create user
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    //login user
    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    };

    //logout user
    const logoutUser = () => {
        signOut(auth);
    };

    //get current user
    useEffect(() => {
        const unsubscire = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => unsubscire();
    }, []);

    const authInfo = { logoutUser, loginUser, createUser, user };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;
