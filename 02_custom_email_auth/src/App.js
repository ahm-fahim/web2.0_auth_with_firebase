import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {
    const handleRegister = (event) => {
        event.preventDefault();
      console.log(event.target.email.value);
        console.log(event.target.password.value);
      
    };
    return (
        <div className="App">
            <form onSubmit={handleRegister}>
                <input type="email" name="email" placeholder="your email" />
                <input
                    type="password"
                    name="password"
                    placeholder="your password"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default App;
