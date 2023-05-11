import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log("setting user to ", action.payload);
      state.user = action.payload;
    },
    setToken: (state, action) => {
      // console.log("setting token to ", action.payload);
      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;
export default userSlice.reducer;
