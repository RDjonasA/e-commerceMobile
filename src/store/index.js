import { applyMiddleware, createStore} from "redux";
import reducer from "../reducers";
import createSagaMiddleware from 'redux-saga'
import mySaga from "../saga/saga";
const sagaMiddleware = createSagaMiddleware()

//const store = createStore(reducer)
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

//store.subscribe(
//    ()=> console.log(store)
//)

export default store