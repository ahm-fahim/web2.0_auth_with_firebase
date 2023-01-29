import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const Home = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const handleLogout = () => {
        logoutUser()
            .then(() => {})
            .catch((error) => {});
    };
    return (
        <div>
            <h1 className="text-4xl">
                {user?.email && <span>Welcome,{user.email} </span>}
                <button onClick={handleLogout} className="btn btn-success">
                    Sign Out
                </button>
            </h1>
        </div>
    );
};

export default Home;
