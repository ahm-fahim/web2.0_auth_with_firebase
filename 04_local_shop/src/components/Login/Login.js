import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import MainLayout from "../../layout/MainLayout";

const Login = () => {
    const { loginUser} = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;

        loginUser(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <MainLayout className="">
            <form onSubmit={handleLogin} className="container w-50">
                <h3 className="text-danger m-2">Login</h3>
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
                <button className="btn btn-danger m-2">Login</button>
                <hr />
                <p>
                    Create a new account?
                    <Link to="/register" className="text-danger">
                        Register
                    </Link>
                </p>
            </form>
        </MainLayout>
    );
};

export default Login;
