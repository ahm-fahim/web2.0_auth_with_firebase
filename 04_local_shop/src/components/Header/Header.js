import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/pngwing.com.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserProfile from "../UserProfile/UserProfile";

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    return (
        <div>
            <div className="d-flex justify-content-center mt-5">
                <img src={logo} alt="" width="200" />
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/shop">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orders">
                                    Orders
                                </Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">Inventory</span>
                            </li>
                            {user?.uid ? (
                                ""
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/register"
                                            className="nav-link"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                        {user?.uid ? (
                            <div class="dropdown">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="dropdown-toggle text-white"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                />
                                <div className="dropdown-menu dropdown-menu-dark bg-dark">
                                    <UserProfile
                                        user={user}
                                        logoutUser={logoutUser}
                                    ></UserProfile>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
