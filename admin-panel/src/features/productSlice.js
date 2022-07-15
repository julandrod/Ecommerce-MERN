import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async ({ productInfo, file }) => {
    if (file) {
      let data = new FormData();
      data.append("image", file);
      const imgResponse = await axios.post(
        "/api/v1/products/uploadImage",
        data
      );
      const image = imgResponse.data.image;
      productInfo = { ...productInfo, image };
    }
    const response = await axios.post("/api/v1/products", productInfo);
    return response.data;
  }
);

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    const response = await axios.get("/api/v1/products");
    return response.data;
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

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({productInfo, id}, { rejectWithValue }) => {
    console.log(productInfo)
    try {
      const { data } = await axios.patch(`/api/v1/products/${id}`, productInfo);
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async ({ id }) => {
    const response = await axios.delete(`/api/v1/products/${id}`);
    if (response.status === 200) return { id };
  }
);

const initialState = {
  products: [],
  countProducts: "",
  singleProduct: "",
  productLoading: false,
  productError: false,
  productErrorInfo: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    // Create new product
    [createProduct.pending]: (state) => {
      state.productLoading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.productLoading = false;
      state.products.push(action.payload);
    },
    [createProduct.rejected]: (state) => {
      state.productLoading = false;
      state.productError = true;
    },
    // Get all products
    [getAllProducts.pending]: (state) => {
      state.productLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.productLoading = false;
      state.products = action.payload.products;
      state.countProducts = action.payload.count;
    },
    [getAllProducts.rejected]: (state) => {
      state.productLoading = false;
      state.productError = true;
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
    // Delete single product
    [deleteProduct.pending]: (state) => {
      state.productLoading = true;
    },
    [deleteProduct.pending]: (state, action) => {
      state.productLoading = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    [deleteProduct.rejected]: (state) => {
      state.productLoading = false;
      state.productLoading = true;
    },
  },
});

export const selectProductState = (state) => state.product;

export default productSlice.reducer;
