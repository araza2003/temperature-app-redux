import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 20, // Initial temperature
};

const temperatureSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = temperatureSlice.actions;
export default temperatureSlice.reducer;
