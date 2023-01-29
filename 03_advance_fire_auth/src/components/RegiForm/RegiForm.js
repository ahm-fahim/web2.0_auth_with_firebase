import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const RegiForm = () => {
    const { createUser } = useContext(AuthContext);
    const [message, setMessage] = useState(false);
    const [errormsg, setErrormsg] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.userName.value;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(name, email, pass);
        createUser(email, pass)
            .then((result) => {
                const user = result.user;
                setMessage(true);
                form.reset();
            })
            .catch((error) => {
                setErrormsg(true, error);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        In this project we learn about react router , firebase ,
                        tailwind , daisy UI, Iconscout! So let's go!
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <p className="text-center text-md mb-3 text-green-400">
                            {message && "Registration Completed Successfully!"}
                            {errormsg && "Registration Failed Try Again!"}
                        </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="userName"
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-success">
                                Register
                            </button>
                            <Link
                                to="/login"
                                className="text-green-500 text-center mt-2 link link-hover hover:text-gray-600"
                            >
                                Already have an account?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegiForm;
