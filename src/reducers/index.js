import { combineReducers } from "redux";
import { shopReducer } from "./shopReducer";

const reducer = combineReducers({
  shopping: shopReducer
})

export default reducer