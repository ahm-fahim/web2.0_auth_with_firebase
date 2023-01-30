import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";

const Sidebar = ({ cart, handleDeleteCart, handleClearCart}) => {
    return (
        <div>
            <nav className="navbar navbar-dark position-fixed bottom-50 end-0">
                <div className="container">
                    <div className="d-flex">
                        <button
                            className="navbar-toggler text-bg-light cartIcon toggleBTN"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                        >
                            <span className="text-danger">{cart.length}</span>
                            <FontAwesomeIcon
                                className="text-secondary"
                                icon={faShoppingCart}
                            />
                        </button>
                    </div>
                    <div
                        className="offcanvas offcanvas-end bg-dark mt-5"
                        tabIndex="-1"
                        id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h3
                                className="offcanvas-title"
                                id="offcanvasDarkNavbarLabel"
                            >
                                <span className="text-danger fw-bold">
                                    Order Summary
                                </span>
                            </h3>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <Cart
                                    cart={cart}
                                    handleDeleteCart={handleDeleteCart}
                                    handleClearCart={handleClearCart}
                                ></Cart>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
