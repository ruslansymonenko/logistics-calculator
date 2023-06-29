import {configureStore} from '@reduxjs/toolkit';

import calculationReducer from './slices/calculationSlice';

export default configureStore({
  reducer: {
    calculation: calculationReducer
  }
});