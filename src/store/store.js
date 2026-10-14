import { configureStore } from "@reduxjs/toolkit";
import cartReducer, {CART_STORAGE_KEY} from './cartSlice.js'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})

store.subscribe(() =>{
    const cart = store.getState().cart
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))

})