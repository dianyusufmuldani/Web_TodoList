import { createSlice } from "@reduxjs/toolkit";
import { hitAddData, hitData, hitDelete } from "../../api";

const initialState = {
  data: null,
  oneData: [],
};
export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      console.log("sukses data reducer");
    },
    setOneData: (state, action) => {
      state.oneData = action.payload;
      console.log("masuk ke reducer");
    },
  },
});

export const getData = (request) => async (dispatch) => {
  try {
    const response = await hitData(request);
    dispatch(setData(response.data.data));
  } catch (err) {
    dispatch(setData(err.response));
  }
};
export const getDelete = (request) => async (dispatch) => {
  try {
    const response = await hitDelete(request);
    dispatch(setData(response.data.data));
  } catch (err) {
    dispatch(setData(err.response));
  }
};

export const addData = (request) => async (dispatch) => {
  try {
    const response = await hitAddData(request);
    dispatch(setData(response.data.data));
  } catch (err) {
    dispatch(setData(err.response));
  }
};
export const { setData, setOneData } = DataSlice.actions;
export default DataSlice.reducer;
