import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "newAsset",
  initialState: {},
  reducers: {
    assetsAdded: (state, action) => {
      return {
        ...state,
        newAsset: action.payload.asset,
      };
    },
  },
});

export const { assetsAdded } = slice.actions;
export default slice.reducer;
