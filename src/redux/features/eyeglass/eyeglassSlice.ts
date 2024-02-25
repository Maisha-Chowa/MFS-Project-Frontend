import { createSlice } from "@reduxjs/toolkit";

interface IEyeGlass {
  frameMaterial: string;
  frameShape: string;
  lensType: string;
  brand: string;
  price: string;
  gender: string;
  color: string;
  quantity: string;
}
const initialState: IEyeGlass = {
  frameMaterial: "",
  frameShape: "",
  lensType: "",
  brand: "",
  price: "",
  gender: "",
  color: "",
  quantity: "",
};

const eyeglassesFilterSlice = createSlice({
  name: "eyeglassesFilter",
  initialState,
  reducers: {
    setFrameMaterial(state, action) {
      state.frameMaterial = action.payload;
    },
    setFrameShape(state, action) {
      state.frameShape = action.payload;
    },
    setLensType(state, action) {
      state.lensType = action.payload;
    },
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setPriceRange(state, action) {
      state.price = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setColor(state, action) {
      state.color = action.payload;
    },
  },
});

export const {
  setFrameMaterial,
  setFrameShape,
  setLensType,
  setBrand,
  setPriceRange,
  setGender,
  setColor,
} = eyeglassesFilterSlice.actions;

export default eyeglassesFilterSlice.reducer;
