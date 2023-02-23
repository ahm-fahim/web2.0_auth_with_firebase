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
    const [loading, setloading] = useState(true);

    //create user
    const createUser = (email, pass) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    //login user
    const loginUser = (email, pass) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    };

    //logout user
    const logoutUser = () => {
        setloading(true);
        signOut(auth);
    };

    //get current user
    useEffect(() => {
        const unsubscire = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setloading(false);
        });
        return () => unsubscire();
    }, []);

    const authInfo = { loading, logoutUser, loginUser, createUser, user };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;
