import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART,LOAD_PRODUCTS,ERROR } from "../types";

export const initialState = {
    products: [],
    cart: [],
    error: false
}
export function shopReducer (state = initialState, action){
    switch(action.type){
        case LOAD_PRODUCTS: {
            const Getproduct = action.allProduct.data
            return{
                ...state,
                products : Getproduct
            }
        }
        case ADD_TO_CART: {
            let newItem = state.products.find(
                (product)=> product.id === action.payload
            )
            let itemInCart = state.cart.find((item)=> item.id === newItem.id)
            return itemInCart
            ?{
                ...state,
                cart: state.cart.map((item)=> item.id === newItem.id
                ? {...item, quantity: item.quantity + 1 }
                :item),
            }:{
               ...state,
               cart: [...state.cart, {...newItem,quantity:1}], 
            }
        }
        case REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find((item)=> item.id === action.payload)
                return itemToDelete.quantity>1
            ?{
                ...state,
                cart: state.cart.map((item)=>
                item.id === action.payload
                ? {...item,quantity: item.quantity - 1}
                : item
                ),
            }
            :{
                ...state,
                cart: state.cart.filter((item) => item.id!== action.payload),
            }
        }
        case REMOVE_ALL_FROM_CART:{
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        }
        case CLEAR_CART:{
            return {
                ...state,
                cart: []
            }
        }

        case ERROR:{
            return{
                ...state,
                error: true
            }
        }
        default:
            return state
}
}