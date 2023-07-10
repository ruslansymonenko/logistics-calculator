import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/api/countries');
      const countries = response.data;
      dispatch(setCountries(countries));
    } catch (error) {
      console.log(error);
    }
  }
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
  },
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    }
  }
});

export const { setCountries } = countriesSlice.actions;

export default countriesSlice.reducer;