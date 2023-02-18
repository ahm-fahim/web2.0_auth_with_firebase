import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";

const Register = () => {
    return (
        <MainLayout>
            <form className="container w-50">
                <h3 className="text-danger m-2">Register Now</h3>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control m-2" required />
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control m-2" required />
                <label htmlFor="cPassword">Confirm Password</label>
                <input type="cPassword" className="form-control m-2" required />
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
