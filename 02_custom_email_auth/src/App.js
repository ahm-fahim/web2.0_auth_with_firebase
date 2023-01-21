import "./App.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase/firebase.init";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const auth = getAuth(app);

function App() {
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleRegister = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        if (!/(?=.*[0-9])/.test(password)) {
            setPasswordError("Password must be a digit into 0-9");
            return;
        }
        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setPasswordError("Please add a speacial character (!@#$%^&*) ");
            return;
        }
        if (!/(?=.{8,})/.test(password)) {
            setPasswordError("Password must be 8 character ");
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError("Password must be a capitel letter!");
        }
        setPasswordError(" ");
        setEmailError("");
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setEmailError(errorMessage);
            });
    };
    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>
                <p className="text-danger">{emailError}</p>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <p className="text-danger">{passwordError}</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default App;
