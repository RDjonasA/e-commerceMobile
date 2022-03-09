import React from 'react'
import { useLocation } from 'react-router-dom'
import '../assets/css/footer.css'
import Home from './Footer/home'
import ProductDetails from './Footer/productDetails'
import Carrito from './Footer/carrito'
export const Footer = () => {
let location = useLocation()
const loca = location.pathname
const white = 'center white'
const active = 'bottom_bar_ico'
return (
<div className="navbar section-footer">

{ loca.includes('/social') ?
    <>
    <Home clase='bottom_bar'/>
    <div className='bottom_bar_active'>
    <Carrito clase={active} ico={white}/>
    </div>
    <ProductDetails clase='bottom_bar'/>
    </>
    :
    loca.includes('/cart') ?
    <>
    <Home clase='bottom_bar'/>
    <div className='bottom_bar_active'>
    <ProductDetails clase={active} ico={white}/>
    </div>
    <Carrito clase='bottom_bar'/>
    </>
    :
    <>
    <Carrito clase='bottom_bar'/>
    <div className='bottom_bar_active'>
    <Home clase={active} ico={white}/>
    </div>
    <ProductDetails clase='bottom_bar'/>
    </>

}
</div>
  )
}

export default Footer