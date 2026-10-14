import { createSlice } from "@reduxjs/toolkit";

export const CART_STORAGE_KEY = 'filmshelf-cart'

function loadCart(){
    try{
        const saved = localStorage.getItem(CART_STORAGE_KEY)
        if (saved) {
            return JSON.parse(saved)
        }         
    }catch (err){
        console.error(err)
    }
    return {items: []}
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: 
        loadCart(),
    reducers: {
        addToCart(state, action){
            state.items.push(action.payload)
        },
    removeFromCart(state, action){
        state.items = state.items.filter((item) => item.id !== action.payload)
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer

