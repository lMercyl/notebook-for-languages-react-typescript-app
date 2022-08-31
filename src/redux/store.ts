import { configureStore } from '@reduxjs/toolkit';
import vocabulary from "./vocabulary/slice";
import item from "./item/slice";
import answer from "./answer/slice";
import result from "./result/slice";
import words from "./words/slice";
import position from "./positions/slice"

export const store = configureStore({
  reducer: {
    vocabulary,
    item,
    answer,
    result,
    words,
    position
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch