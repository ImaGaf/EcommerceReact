import React from 'react';
import { useSelector } from 'react-redux';

const Purchases = () => {

    const favorites = useSelector(state=> state.favorites)

    return (
        <div>
            <h1>Purchases</h1>
        </div>
    );
};

export default Purchases;