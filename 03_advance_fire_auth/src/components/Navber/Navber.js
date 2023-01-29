import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
    return (
        <div className="text-2xl bg-white">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle hover:bg-green-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li className="active:text-green-300">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="active:text-green-300">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="active:text-green-300">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="active:text-green-300c">
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        Authentication
                    </Link>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="text-lg mx-1">
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="btn btn-outline btn-success mx-1"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;
