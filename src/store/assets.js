import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "assets",
  initialState: {
    list: [],
  },
  reducers: {
    assetAdded: (assets, action) => {
      assets.list.push(action.payload.assets);
    },
    assetsReceived: (assets, action) => {
      assets.list = action.payload.assets;
    },
  },
});

export const { assetAdded, assetsReceived } = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/assets";

export const loadAssets = () =>
  apiCallBegan({
    url,
    onSuccess: slice.actions.assetsReceived.type,
  });

export const addAsset = (asset) =>
  apiCallBegan({
    url,
    method: "POST",
    data: asset,
    onSuccess: assetAdded.type,
  });
