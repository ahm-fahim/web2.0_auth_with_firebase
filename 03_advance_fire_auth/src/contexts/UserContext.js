import React, { createContext } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const createAuth = getAuth(app);

const UserContext = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(createAuth, email, password);
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(createAuth, email, password);
    };

    const authInfo = { createUser, loginUser };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;
