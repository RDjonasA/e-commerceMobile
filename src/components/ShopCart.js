import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart,remFromCart } from '../actions/shopAction'
import ProductItem from './ProductItem'
import '../assets/css/item.css'

export const ShopCart = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const {products,error } = state.shopping
  return (
      <>
  {!error ? 
    <div className="container-fluid">
    <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
        {products.map((product) => (
            <ProductItem key={product.id} data={product} addToCart={()=> dispatch(addToCart(product.id))} dellOneFromCart={()=> dispatch(remFromCart(product.id))}/>
        ))
        }
    </div>
    </div>
  : 
  <div className="container-fluid">
  <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
    <h1>Error</h1>  
  </div>
  </div>
}  
  </>
  )
}
