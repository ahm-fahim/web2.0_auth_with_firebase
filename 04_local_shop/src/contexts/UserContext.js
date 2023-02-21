import React, { createContext, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    //create user
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };
    
    //login user
    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    };

    const authInfo = { loginUser, createUser, setUser };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;
