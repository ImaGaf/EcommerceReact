import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import Filter from './Filter';
import ProductList from './ProductList';

const Home = () => {

    return (
        <div className='home-page'>
            <Filter />
            <ProductList />
        </div>
    );
};

export default Home;