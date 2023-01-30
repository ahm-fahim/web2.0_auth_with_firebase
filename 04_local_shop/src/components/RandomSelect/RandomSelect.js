import React from "react";

const RandomSelect = ({ randomItem }) => {
    const { img, name, quantity, price } = randomItem;

    return (
        <div className="row mt-1 d-flex align-items-center text-bg-warning p-1 m-1 rounded-1 cartItemsBody ">
            <div className="col-4">
                <img src={img} alt="" className="cartImg" />
            </div>
            <div className="col-8">
                <h6 className="texst-white">Choose One</h6>
                <p className="cartItemsName">{name}</p>
                <p className="cartItemsName">Quantity{quantity}</p>
                <p className="cartItemsName text-danger">{price}$</p>
            </div>
        </div>
    );
};

export default RandomSelect;
