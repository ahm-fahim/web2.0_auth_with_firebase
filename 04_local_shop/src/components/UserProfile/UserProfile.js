import React from "react";

const UserProfile = ({ user, logoutUser }) => {
    return (
        <div>
            <p>{user?.email}</p>
            <hr />
            <p onClick={logoutUser}>Logout</p>
        </div>
    );
};

export default UserProfile;
