import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBookFilter {
  searchTerm: string;
  filters: Record<string, string> ;
}

const initialState: IBookFilter = {
  searchTerm: "",
  filters: {
    genre: "",
    publicationDate: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{ key: string; value: string }>
    ) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    resetFilters: (state) => {
      state.searchTerm = "";
      state.filters = {
        genre: "",
        publicationDate: "",
      };
    },
  },
});

export const {setSearchTerm, setFilter, resetFilters} = filterSlice.actions;

export default filterSlice.reducer;
