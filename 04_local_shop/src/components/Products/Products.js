import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
    const { handleAddToCart, products } = props;
    const { img, name, price, stock, seller } = products;

    return (
        <div className="col-md-4 col-lg-2 col-sm-6">
            <div className="card mt-2 text-center">
                <img src={img} alt="Not Found!" className="card-img-top" />
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <div className="text-secondary card-text">
                        <h5 className="text-danger">$ {price}</h5>
                        <p>
                            <small>In stock- {stock}</small>
                            <small className="px-2">| seller- {seller}</small>
                        </p>
                    </div>
                    <button
                        onClick={() => handleAddToCart(products)}
                        className="btn btn-danger btnPosition"
                    >
                        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
