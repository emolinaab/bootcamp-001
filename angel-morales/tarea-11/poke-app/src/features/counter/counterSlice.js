import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value >= 1142) {
        return void (state.value = 0);
      }
      state.value += 10;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
