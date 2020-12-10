import { combineReducers } from "redux";
import productReducer from "./product.reducers";
import productDetailsReducer from "./productDetail.reducers";
import cartReducer from "./cart.reducers";
import userReducer from "./user.reducers";
import orderReducer from "./order.reducers";
// user reducers ADMIN
import userListReducer from "./User/userList.reducer";
import userDetailsReducer from "./User/userDetails.reducer";
// order reducers
import orderListReducer from "./Order/orderList.reducer";
// product reducer
import productTopRatedReducer from "./Product/productTopRated";

const rootReducer = combineReducers({
  product: productReducer,
  productDetails: productDetailsReducer,
  productTopRated: productTopRatedReducer,
  cart: cartReducer,
  user: userReducer,
  // order
  order: orderReducer,
  orderList: orderListReducer,
  // user
  userList: userListReducer,
  userDetails: userDetailsReducer,
});

export default rootReducer;
