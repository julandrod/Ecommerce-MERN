import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  gender: "",
  size: "",
  sort: "",
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state[action.payload.name] = action.payload.value;
      if (action.payload.gender) {
        state.gender = action.payload.gender;
      }
    },
    clearFilters: (state) => {
      state.category = "";
      state.gender = "";
      state.size = "";
      state.sort = "";
      state.search = "";
    },
  },
});

export const { updateFilters, clearFilters } = filtersSlice.actions;

export const selectFilterState = (state) => state.filters;

export default filtersSlice.reducer;
