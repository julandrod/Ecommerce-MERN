import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import productReducer from "./features/productSlice";
import orderReducer from "./features/orderSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    order: orderReducer,
  },
});
