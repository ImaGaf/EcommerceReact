import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import getConfig from '../../utils/getConfig';

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: [],
    reducers: {
        setFavorites:(state, action)=>{
            const favorites = action.payload
            return favorites
        }

    }
})

export const getFavoritesThunk = () => dispatch =>{ 
    axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/purchases/", getConfig())
    .then(res => dispatch(setFavorites(res.data)))
}

export const {setFavorites} = favoriteSlice.actions;

export default favoriteSlice.reducer;
