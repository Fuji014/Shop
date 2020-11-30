import { combineReducers } from "redux";
import productReducer from "./product.reducers";
import productDetailsReducer from "./productDetail.reducers";
import cartReducer from "./cart.reducers";

const rootReducer = combineReducers({
  product: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
