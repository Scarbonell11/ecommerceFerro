import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    idToken: "",
    localId: "",
  },
  reducers: {
    setUser: (state, action) => {
      (state.email = action.payload.email),
        (state.idToken = action.payload.idToken);
      state.localId = action.payload.localId;
    },
    clearUser: (state) => {
      state.email = "";
      state.idToken = "";
      state.localId = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
