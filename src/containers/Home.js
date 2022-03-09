import { ShopCart } from '../components/ShopCart'
import '../assets/css/home.css'

export default function Home() {
  return ( 
        <div className='container prom'>
          <h1>Promociones todos los dias</h1>
        <div className='container scroll'>
        <ShopCart/>
        </div>
        <br/>
        <br/>
        <br></br>
        </div>
  )
}