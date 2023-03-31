import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type View = {
  grid: boolean;
};

type AppState = {
  grid: boolean;
};

const initialState: AppState = { grid: true };

export const viewSlice = createSlice({
  name: "gnNews",
  initialState,
  reducers: {
    changeView: (state, action: PayloadAction<boolean>) => {
      state.grid = action.payload;
    },
  },
});

export const { changeView } = viewSlice.actions;
export default viewSlice.reducer;
