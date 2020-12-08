import { createSlice } from "@reduxjs/toolkit";

export const Loader = createSlice({
  name: "Loader",
  initialState: { show: false },
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },
  },
});

export const { toggle } = Loader.actions;

export default Loader.reducer;