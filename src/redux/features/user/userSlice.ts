import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ILoginToggle = {
  isLoggedIn: boolean;
};

const initialState: ILoginToggle = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggledLogin: (state, action:PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {toggledLogin} = userSlice.actions;

export default userSlice.reducer;
