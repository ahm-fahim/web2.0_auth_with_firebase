import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import MainLayout from "../../layout/MainLayout";

const Register = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        const confirm = form.confirm.value;
        if (pass.length < 6) {
            setError("Please must be 6 character");
            return;
        }
        if (pass !== confirm) {
            setError("Password did not match each other!");
            return;
        }
        
        createUser(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
            })
            .catch((error) => {
                setError(error);
            });
    };
    return (
        <MainLayout>
            <form onSubmit={handleSubmit} className="container w-50">
                <h3 className="text-danger m-2">Register Now</h3>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control m-2"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control m-2"
                    required
                />

                <label htmlFor="confirm">Confirm Password</label>
                <input
                    type="password"
                    name="confirm"
                    className="form-control m-2"
                    required
                />
                <p className="text-danger">{error}</p>
                <button className="btn btn-danger m-2">Register</button>
                <hr />
                <p>
                    Already have an account?
                    <Link to="/login" className="text-danger">
                        Login
                    </Link>
                </p>
            </form>
        </MainLayout>
    );
};

export default Register;
