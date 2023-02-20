import React, { createContext } from "react";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const user = { email: "aga", pass: "1231if" };
    const user2 = { email: "ewi" };
    const authInfo = { user };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;
