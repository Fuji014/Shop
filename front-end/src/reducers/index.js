import { combineReducers } from "redux";
import productReducer from "./product.reducers";
import productDetailsReducer from "./productDetail.reducers";
import cartReducer from "./cart.reducers";
import userReducer from "./user.reducers";

const rootReducer = combineReducers({
  product: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
