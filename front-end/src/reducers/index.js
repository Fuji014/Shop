import { combineReducers } from "redux";
import productReducer from "./product.reducers";
import productDetailsReducer from "./productDetail.reducers";
import cartReducer from "./cart.reducers";
import userReducer from "./user.reducers";
import orderReducer from "./order.reducers";

const rootReducer = combineReducers({
  product: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
});

export default rootReducer;
