import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOrders = createAsyncThunk(
  "order/getAllOrders",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/v1/orders");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const getSingleOrder = createAsyncThunk(
  "order/getSingleOrder",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/orders/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async ({id, status}, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/api/v1/orders/${id}`, status);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

const initialState = {
  orders: [],
  singleOrder: "",
  countOrders: "",
  orderLoading: false,
  oderError: false,
  orderErrorInfo: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    // get all orders
    [getAllOrders.pending]: (state) => {
      state.orderLoading = true;
    },
    [getAllOrders.fulfilled]: (state, action) => {
      state.orderLoading = false;
      state.orders = action.payload.orders;
      state.countOrders = action.payload.count;
    },
    [getAllOrders.rejected]: (state, action) => {
      state.orderLoading = false;
      state.orderError = true;
      state.orderErrorInfo = action.payload;
    },
    // get single order
    [getSingleOrder.pending]: (state) => {
      state.orderLoading = true;
    },
    [getSingleOrder.fulfilled]: (state, action) => {
      state.orderLoading = false;
      state.singleOrder = action.payload.order;
    },
    [getSingleOrder.rejected]: (state, action) => {
      state.orderLoading = false;
      state.orderError = true;
      state.orderErrorInfo = action.payload;
    },
    // update single orders
    [updateOrder.pending]: (state) => {
      state.orderLoading = true;
    },
    [updateOrder.fulfilled]: (state, action) => {
      state.orderLoading = false;
      state.singleOrder = action.payload.order;
    },
    [updateOrder.rejected]: (state, action) => {
      state.orderLoading = false;
      state.orderError = true;
      state.orderErrorInfo = action.payload;
    },
  },
});

export const selectOrderState = (state) => state.order;

export default orderSlice.reducer;
