import { combineReducers } from "redux"

import ProductsReducer from "./ProductsReducer"
import AlertsReducer from "./AlertsReducer"

export default combineReducers({
  products: ProductsReducer,
  alerts: AlertsReducer,
})
