import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCarriers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/api/carriers/getCarriers');
      const carriers = response.data;
      dispatch(setCarriers(carriers));
    } catch (error) {
      console.log(error);
    }
  }
}

export const carriersSlice = createSlice({
  name: 'carriers',
  initialState: {
    carriers: [],
  },
  reducers: {
    setCarriers: (state, action) => {
      state.carriers = action.payload;
    }
  }
});

export const { setCarriers } = carriersSlice.actions;

export default carriersSlice.reducer;