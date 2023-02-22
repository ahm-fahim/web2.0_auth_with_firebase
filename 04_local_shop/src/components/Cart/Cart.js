import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import RandomSelect from "../RandomSelect/RandomSelect";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, handleDeleteCart, handleClearCart }) => {
    const [randomItem, setRandomItem] = useState([]);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const products of cart) {
        quantity = quantity + products.quantity;
        total = total + products.price * products.quantity;
        shipping = shipping + products.shipping;
    }
    const vat = parseFloat((total * 0.1).toFixed(2));
    const totalAmount = total + shipping + vat;

    // choose random Item
    const chooseRandom = (arr) => {
        const index = Math.floor(Math.random() * arr.length);
        const item = cart[index];
        setRandomItem(item);
    };

    return (
        <div className="text-secondary">
            <div className="cartItems">
                <RandomSelect randomItem={randomItem}></RandomSelect>

                {cart.map((items) => (
                    <CartItem
                        key={items.id}
                        items={items}
                        handleDeleteCart={handleDeleteCart}
                    ></CartItem>
                ))}
            </div>
            <div>
                <button
                    className="btn btn-warning"
                    onClick={() => chooseRandom(cart)}
                >
                    Choose 1 for me
                </button>
                <button
                    className="btn btn-danger m-2"
                    onClick={() => handleClearCart()}
                >
                    Clear Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            <p>
                Total Items :{" "}
                <span className="text-danger fw-bold">{cart.length}</span>
            </p>
            <p>
                Total Quantity :{" "}
                <span className="text-danger fw-bold">{quantity}</span>
            </p>
            <p>
                Total Price :{" "}
                <span className="text-danger fw-bold">{total.toFixed(2)}</span>$
            </p>
            <p>
                Total Shipping :{" "}
                <span className="text-danger fw-bold">
                    {shipping.toFixed(2)}
                </span>
                $
            </p>
            <p>
                Vat: <span className="text-danger fw-bold">{vat}</span>
            </p>
            <p>
                Total Amount:{" "}
                <span className="text-warning fw-bold">
                    {totalAmount.toFixed(2)}
                </span>
                $
            </p>
            <Link to="/orders" className="btn btn-success mb-2">
                Review Order
            </Link>
        </div>
    );
};

export default Cart;
