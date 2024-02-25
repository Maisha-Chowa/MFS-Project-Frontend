import { createSlice } from "@reduxjs/toolkit";

export interface ISalesInfo {
  QuantityOfTheProduct: string;
  NameOfTheBuyer: string;
  DateOfTheSale: string;
}
const initialState: ISalesInfo = {
  QuantityOfTheProduct: "",
  NameOfTheBuyer: "",
  DateOfTheSale: "",
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setDateOfTheSale(state, action) {
      state.DateOfTheSale = action.payload;
    },
  },
});

export const { setDateOfTheSale } = salesSlice.actions;

export default salesSlice.reducer;
