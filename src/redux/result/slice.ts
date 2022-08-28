import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getResultFromLS } from '../../utils/getResultFromLS';
import { ResultSliceState } from './types';

const initialState: ResultSliceState = getResultFromLS();

const ResultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult(state: ResultSliceState, action: PayloadAction<ResultSliceState>) {
      state.right = action.payload.right;
      state.error = action.payload.error;
      state.all = action.payload.all;
    },
    addRight(state: ResultSliceState, action: PayloadAction) {
      state.right += 2;
    },
    addError(state: ResultSliceState, action: PayloadAction) {
      state.error += 2;
    },
    setAll(state: ResultSliceState, action: PayloadAction<number>) {
      state.all = action.payload;
    }
  }, 
})

export const { setResult, addRight, addError, setAll } = ResultSlice.actions;

export default ResultSlice.reducer;
