import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const createAuth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState("");
    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(createAuth, email, password);
    };
    //login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(createAuth, email, password);
    };
    //logout user
    const logoutUser = () => {
        return signOut(createAuth);
    };

    //get current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(createAuth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = { createUser, loginUser, user, logoutUser};
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;
