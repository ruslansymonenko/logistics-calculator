import {configureStore} from '@reduxjs/toolkit';

import calculationReducer from './slices/calculationSlice';
import countriesReducer from './slices/countriesSlice';

export default configureStore({
  reducer: {
    calculation: calculationReducer,
    countries: countriesReducer
  }
});