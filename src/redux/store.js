import { configureStore } from '@reduxjs/toolkit';
import data from "./features/data";
import navbar from "./features/navbar";


export const store = configureStore({
  reducer: {
    data: data,
    navbar: navbar
  },
});
