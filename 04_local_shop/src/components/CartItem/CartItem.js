import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./CartItem.css";

const CartItem = ({ items, handleDeleteCart}) => {
    const { img, name, quantity, price } = items;

    return (
        <div className="row mt-1 d-flex align-items-center text-bg-light p-1 m-1 rounded-1 cartItemsBody ">
            <div className="col-2">
                <img src={img} alt="" className="cartImg" />
            </div>
            <div className="col-7">
                <p className="cartItemsName">{name}</p>
                <p className="cartItemsName">Quantity - {quantity}</p>
                <p className="cartItemsName text-danger">{price}$</p>
            </div>
            <div className="col-3">
                <button
                    onClick={() => handleDeleteCart(items)}
                    className="btn btn-outline-danger"
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
