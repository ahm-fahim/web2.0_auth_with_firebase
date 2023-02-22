import React from 'react';

const UserProfile = ({user}) => {
    return (
        <div>
            <p>{user?.email}</p>
            <hr />
            <p>Logout</p>
        </div>
    );
};

export default UserProfile;