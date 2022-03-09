import {  useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
export default function ProductDetails(props) {
  const state = useSelector(state => state)
  const {cart} = state.shopping
  let quant = 0
  return (
<>
  {cart.length >0 ?
  <div className={props.clase}>
    <NavLink end to='/cart' exact>
      <svg xmlns="http://www.w3.org/2000/svg" className={props.ico} width="2rem" height="2rem" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
      </svg> 
         {cart.map((p)=>{
        quant+= p.quantity
          })}
        <div className='quantityy'>{quant}</div>
      </NavLink>
  </div>
: 
  <div className={props.clase}>
    <NavLink end to='/cart' exact>
      <svg xmlns="http://www.w3.org/2000/svg" className={props.ico} width="2rem" height="2rem" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
      </svg>
    </NavLink>
  </div>
  }
</>

  )
}
