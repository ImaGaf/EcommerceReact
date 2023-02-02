import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFavoritesThunk } from '../store/slices/favorites.slice';

const Purchases = () => {

    const favorites = useSelector(state => state.favorites)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavoritesThunk())
    }, [])


    return (
        <div className='purchases-container'>
            <div className='purchases-title'>
                <h6>
                    <span className='purchase-back' onClick={() => navigate("/")} >Home</span>
                    <i className='bx bxs-circle'></i><span>Purchases</span>
                </h6>
                <h2>My Purchases</h2>
            </div>
            <div className='purchase-page '>

                {
                    favorites.map(favorite => (
                        <div className='purchase-item' key={favorite.id}>
                            <div className='purchase-date'>
                                <p>{favorite.createdAt.slice(0, 10)}</p>
                            </div>
                            <div className='purchase-product'>
                                <p className='purchase-name'>{favorite.product?.title}</p>
                                <span>{favorite.quantity}</span>
                                <p>${favorite.product?.price}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>

    );
};

export default Purchases;