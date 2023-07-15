import {configureStore} from '@reduxjs/toolkit';

import calculationReducer from './slices/calculationSlice';
import countriesReducer from './slices/countriesSlice';
import carriersSlice from './slices/carriersSlice';

export default configureStore({
  reducer: {
    calculation: calculationReducer,
    countries: countriesReducer,
    carriers: carriersSlice
  }
});