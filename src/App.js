import { Route, Routes, BrowserRouter} from "react-router-dom"
import {Provider} from 'react-redux'
import './assets/css/index.css'
import store from './store';
import CartItems from './containers/CartItems';
import Home from './containers/Home';
import Layout from "./containers/Layout";
import ProductDetails from "./containers/ProductDetails";
import Social from "./components/Social";

function App() {
  return (
    <div className="contenido">
    <Provider store={store}>
      <BrowserRouter>
      <Layout>
      <Routes>
          <Route  strict path='/' element={<Home/>}/>
          <Route  strict path='/cart' element={<CartItems/>}/>
          <Route  strict path='/details/:id' element={<ProductDetails/>}/>
          <Route  strict path='/social' element={<Social/>}/>
      </Routes>
      </Layout>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
