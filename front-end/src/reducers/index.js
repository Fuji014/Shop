import { combineReducers } from "redux";
import productReducer from "./product.reducers";
import productDetailsReducer from "./productDetail.reducers";
import cartReducer from "./cart.reducers";
import userReducer from "./user.reducers";
import orderReducer from "./order.reducers";
// user reducers ADMIN
import userListReducer from "./User/userList.reducer";
import userDeleteReducer from "./User/userDelete.reducer";
import userDetailsReducer from "./User/userDetails.reducer";
// order reducers
import orderListReducer from "./Order/orderList.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
  // order
  order: orderReducer,
  orderList: orderListReducer,
  // user
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
});

export default rootReducer;
