import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";

const Login = () => {
    return (
        <MainLayout className="">
            <form className="container w-50">
                <input
                    type="email"
                    className="form-control m-2"
                    placeholder="email@gmail.com"
                    required
                />
                <input
                    type="password"
                    className="form-control m-2"
                    placeholder="secrate password"
                    required
                />
                <button className="btn btn-danger m-2">Login</button>
                <hr />
                <Link to="/register" className="text-danger">
                    Create a new account.
                </Link>
            </form>
        </MainLayout>
    );
};

export default Login;
