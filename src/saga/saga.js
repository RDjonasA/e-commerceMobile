import {put,call,all} from 'redux-saga/effects'
import {fetchData} from './api'
function* allProducts(){
  const allProduct = yield call(fetchData) 
  if(allProduct.length !== 0 ){
    yield put({type: 'LOAD_PRODUCTS', allProduct})
  }else{
    yield put({type:'ERROR'})
  }
  
}

export default function* mySaga(){
  yield all([
    allProducts()
  ])
}