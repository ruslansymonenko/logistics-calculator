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
    shippingRates: null,
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
    setCarrier: (state, action) => {
      state.carrier = action.payload
    },
    setShippingRates: (state, action) => {
      state.shippingRates = action.payload
    },
    setOrdersAmount: (state, action) => {
      state.ordersAmount = action.payload
    },
    setWarehousePayment: (state, action) => {
      state.warehousePayment = action.payload
    },
    clearIndicators: (state) => {
      state.volume = 0;
      state.weight = 0;
      state.price = 0;
      state.currency = 'EUR';
      state.country = null;
      state.carrier = null;
      state.shippingRates = null;
      state.ordersAmount = 1;
      state.warehousePayment = false;
    }
  }
});

export const {setVolume, setWeight, setPrice, setCountry, setCarrier, setShippingRates, setOrdersAmount, setWarehousePayment, clearIndicators} = calculationSlice.actions;

export default calculationSlice.reducer;