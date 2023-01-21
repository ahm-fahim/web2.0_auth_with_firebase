import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.init";
import {Form,Button }from "react-bootstrap";


const auth = getAuth(app);

function App() {
    const handleRegister = (event) => {
        event.preventDefault();
        console.log(event.target.email.value);
        console.log(event.target.password.value);
      
    };
    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default App;
