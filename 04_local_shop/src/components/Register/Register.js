import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";

const Register = () => {
    return (
        <MainLayout>
            <form className="container w-50">
                <input type="email" className="form-control m-2" placeholder="email" required/>
                <input type="password" className="form-control m-2" placeholder="password" required />
                <button className="btn btn-danger m-2">Register</button>
                <hr />
                <Link to="/login" className="text-danger">Already have an account?</Link>
            </form>
        </MainLayout>
    );
};

export default Register;
