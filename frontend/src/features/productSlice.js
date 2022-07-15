import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getUniqueValues } from "../utils/helpers";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async ({ category, sort, size, gender, search }, { rejectWithValue }) => {
    let url = `/api/v1/products?category=${category}&sort=${sort}&gender=${gender}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "product/getSingleProduct",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/products/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

const initialState = {
  products: [],
  countProducts: "",
  categories: [],
  companies: [],
  singleProduct: {},
  productLoading: false,
  productError: false,
  productErrorInfo: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    // Get all products
    [getAllProducts.pending]: (state) => {
      state.productLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.productLoading = false;
      state.products = action.payload.products;
      state.categories = getUniqueValues(state.products, "category");
      state.companies = getUniqueValues(state.products, "company");
      state.countProducts = action.payload.count;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.productLoading = false;
      state.productError = true;
      state.productErrorInfo = action.payload;
    },
    // Get single products
    [getSingleProduct.pending]: (state) => {
      state.productLoading = true;
      state.productError = false;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.productLoading = false;
      state.singleProduct = action.payload.product;
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.productLoading = false;
      state.productError = true;
      state.productErrorInfo = action.payload;
    },
  },
});

export const selectProductState = (state) => state.product;

export default productSlice.reducer;
