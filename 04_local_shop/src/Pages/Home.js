import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Cover from "../components/Cover/Cover";
import "../App.css";
const Home = () => {
    return (
        <MainLayout>
            <div className="container-fluid App">
                <Cover></Cover>
                <Link to="/shop" className="btn btn-danger m-3">
                    Let Start Shopping
                </Link>
            </div>
        </MainLayout>
    );
};

export default Home;
