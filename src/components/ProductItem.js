import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
const ProductItem = ({ data, addToCart, dellOneFromCart }) => {
    let { id, nombre, precio, img} = data;
    const state = useSelector(state => state)
    const {cart} = state.shopping
    let quant = 0
    return (
        <>
        { cart.map((prod)=>{
            if (prod.id === id){
                quant = prod.quantity
            }
        })}
        <div className='card'>
            <div className='imgBx'>
                <img src={img} alt={nombre} height='200' width='150'/>
            </div>
            <h4>${precio} c/u</h4>
            <div className='contentBx'>
                <h2>{nombre}</h2>
                <div className='color'>
                <span onClick={() =>dellOneFromCart(id)}>-</span>
                <span>{quant}</span>
                <span className='button' onClick={()=> addToCart(id)} > + </span>
                </div>
                <NavLink
                    to={{
                    pathname: `/details/${id}`,
                    }}
                > Ver más</NavLink>
            </div>
        </div>

      </>
    );
  };
  
  export default ProductItem;