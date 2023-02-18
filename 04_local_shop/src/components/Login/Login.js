import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";

const Login = () => {
    return (
        <MainLayout className="">
            <form className="container w-50">
                <h3 className="text-danger m-2">Login</h3>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control m-2" required />
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control m-2" required />
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
