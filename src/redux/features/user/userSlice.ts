import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ILoginToggle = {
  isLoggedIn: boolean;
  userId: string;
};

const initialState: ILoginToggle = {
  isLoggedIn: false,
  userId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggledLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const { toggledLogin, setUserId } = userSlice.actions;

export default userSlice.reducer;
