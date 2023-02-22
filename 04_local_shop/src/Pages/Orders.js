import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import MainLayout from '../layout/MainLayout';

const Orders = () => {
    const {innitailCart } = useLoaderData();
    return (
        <MainLayout>
            <div className="container">
                <Cart cart={innitailCart}></Cart>
                <Link to="/" className='btn btn-warning mb-5'>Purchase</Link>
            </div>
        </MainLayout>
    );
};

export default Orders;