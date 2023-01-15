import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import "./App.css";
import app from "./firebase/firebase.init";
import React, { useState } from "react";

const auth = getAuth(app);

function App() {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    };

    const handleSignOut = () => {
        signOut(auth, provider)
            .then((result) => {
                setUser({});
            })
            .catch((error) => {
                console.error("error: ", error);
            });
    };
    return (
        <div className="App">
            {user.email ? (
                <button onClick={handleSignOut}>Sign fOut</button>
            ) : (
                <button onClick={handleGoogleSignIn}>Google Sing In</button>
            )}

            {user.email && (
                <div>
                    <h1>{user.displayName}</h1>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" width="200" height="200" />
                </div>
            )}
        </div>
    );
}

export default App;
