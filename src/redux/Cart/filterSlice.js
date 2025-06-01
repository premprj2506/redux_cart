import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  priceRange: "all",
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearFilter: (state) => {
      state.category = "all";
      state.priceRange = "all";
      state.searchTerm = "";
    },
  },
});

export const { setCategory, setPriceRange, setSearchTerm, clearFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
