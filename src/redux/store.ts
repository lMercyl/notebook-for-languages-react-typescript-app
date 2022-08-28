import { configureStore } from '@reduxjs/toolkit';
import vocabulary from "./vocabulary/slice";
import item from "./item/slice";

export const store = configureStore({
  reducer: {
    vocabulary,
    item
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch