import '../assets/css/home.css'
import { useParams} from "react-router-dom"
import { useSelector } from 'react-redux'

const ProductDetails = () =>{
let {id} = useParams() 
const state = useSelector(state => state)
const {products} = state.shopping
 return(
  <>
    <h1 className='aa center'>
    { products.map((prod)=>{
      if (prod.id === parseInt(id)){
        return (<>
            <div className='container'>
              <img src={prod.img} alt="card__image" className="card__image" height="200px"/>
            </div>
          {prod.nombre}
          <h2>{prod.descripcion}</h2>
          <h2>${prod.precio}</h2>
          </>
        )
      }
    })}
  </h1>
  </>
  )
}

export default ProductDetails