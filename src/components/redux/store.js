import { numberReducer } from './numberSlice';
import { filterReducer } from './filterSlice';
const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    numbers: numberReducer,
    filters: filterReducer,
  },
});
