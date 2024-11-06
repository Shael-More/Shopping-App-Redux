// global state which contains all the slices of the project

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart-slice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});


export default store;