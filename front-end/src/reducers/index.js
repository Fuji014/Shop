import { combineReducers } from "redux";
import productReducer from "./product.reducers";
import productDetails from "./productDetail.reducers";

const rootReducer = combineReducers({
  product: productReducer,
  productDetails: productDetails,
});

export default rootReducer;
