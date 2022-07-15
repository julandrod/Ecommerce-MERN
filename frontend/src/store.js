import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import productReducer from "./features/productSlice";
import filtersReducer from "./features/filtersSlice";
import cartReducer from "./features/cartSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    filters: filtersReducer,
    cart: cartReducer,
  },
});
