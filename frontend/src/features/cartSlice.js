import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk(
  "cart/createOrder",
  async ({ orderItems }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/v1/orders", orderItems);
      return data.order;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

const initialState = {
  order: {},
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  totalItems: 0,
  totalPrice: 0,
  shippingFee: 15000,
  cartLoading: false,
  cartError: false,
  cartErrorInfo: "",
  cartModal: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { product, amount } = action.payload;
      const tempItem = state.cartItems.find((item) => item.product === product);

      if (tempItem) {
        let tempCart = state.cartItems.map((cartItem) => {
          if (cartItem.product === product) {
            let newTotalItems = cartItem.amount + amount;
            if (newTotalItems > cartItem.maxStock) {
              newTotalItems = cartItem.maxStock;
            }
            return { ...cartItem, amount: newTotalItems };
          } else {
            return cartItem;
          }
        });
        state.cartItems = tempCart;
      } else {
        const newItem = action.payload;
        state.cartItems.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    countTotals: (state) => {
      const { totalItems, totalPrice } = state.cartItems.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.totalItems += amount;
          total.totalPrice += price * amount;
          return total;
        },
        { totalItems: 0, totalPrice: 0 }
      );
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product !== action.payload
      );
    },
    toggleAmount: (state, action) => {
      const { product, value } = action.payload;
      const tempCart = state.cartItems.map((item) => {
        if (item.product === product) {
          if (value === "inc") {
            let newAmount = item.amount + 1;
            if (newAmount > item.maxStock) {
              newAmount = item.maxStock;
            }
            return { ...item, amount: newAmount };
          }
          if (value === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });
      state.cartItems = tempCart;
    },
    showCartModal: (state) => {
      state.cartModal = !state.cartModal;
    },
  },
  extraReducers: {
    // Create order
    [createOrder.pending]: (state) => {
      state.cartLoading = true;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.cartLoading = false;
      state.order = action.payload;
    },
    [createOrder.rejected]: (state, action) => {
      state.cartLoading = false;
      state.cartError = true;
      state.cartErrorInfo = action.payload;
    },
  },
});

export const {
  addItemToCart,
  countTotals,
  clearCart,
  removeCartItem,
  toggleAmount,
  showCartModal
} = cartSlice.actions;

export const selectCartState = (state) => state.cart;

export default cartSlice.reducer;
