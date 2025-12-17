import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buyerId: Number,
  buyerAccessToken: String,
  buyerRefreshToken: String,
  role: String,
  buyerEmail: String,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setLoginCredentials: (state, action) => {
      const { accessToken, refreshToken, user } = action.payload;
      state.buyerId = user.id;
      state.buyerAccessToken = accessToken;
      state.buyerRefreshToken = refreshToken;
      state.role = user.role;
      state.buyerEmail = user.email;
    },
  },
});

export const { setLoginCredentials } = authSlice.actions;

export default authSlice.reducer;
