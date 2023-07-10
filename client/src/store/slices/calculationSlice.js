import { createSlice } from '@reduxjs/toolkit';

export const calculationSlice = createSlice({
  name: 'calculation',
  initialState: {
    volume: 0,
    weight: 0,
    price: 0,
    currency: 'EUR',
    country: null,
    carrier: null,
    ordersAmount: 1,
    warehousePayment: false
  },
  reducers: {
    setVolume: (state, action) => {
      state.volume = action.payload
    },
    setWeight: (state, action) => {
      state.weight = action.payload
    },
    setPrice: (state, action) => {
      state.price = action.payload
    },
    setCountry: (state, action) => {
      state.country = action.payload
    },
    clearIndicators: (state) => {
      state.volume = 0;
      state.weight = 0;
      state.price = 0;
      state.currency = 'EUR';
      state.country = null;
      state.carrier = null;
      state.ordersAmount = 1;
      state.warehousePayment = false;
    }
  }
});

export const {setVolume, setWeight, setPrice, setCountry, clearIndicators} = calculationSlice.actions;

export default calculationSlice.reducer;