import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from './slices/favorites.slice'
import productsSlice from './slices/products.slice'

export default configureStore({
    reducer: {
        products: productsSlice,
        favorites: favoritesSlice
    }
})
