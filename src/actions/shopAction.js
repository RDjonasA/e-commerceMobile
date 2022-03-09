import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART, LOAD_PRODUCTS, ERROR} from "../types";

export const addToCart = (id) => ({type: ADD_TO_CART, payload: id})

export const remFromCart = (id, all = false) => (
    all
    ? {type:REMOVE_ALL_FROM_CART, payload: id} // true
    :{type:REMOVE_ONE_FROM_CART,payload:id}) // false

export const clearCart = () => ({type: CLEAR_CART})

export const loadProducts = () => ({type:LOAD_PRODUCTS})

export const error = () => ({type: ERROR})
