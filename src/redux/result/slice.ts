import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getResultFromLS } from '../../utils/getResultFromLS';
import { ResultSliceState, Result } from './types';

const initialState: ResultSliceState = getResultFromLS();

const ResultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult(state: ResultSliceState, action: PayloadAction<ResultSliceState>) {
      state.translation = action.payload.translation;
      state.speed = action.payload.speed;
      state.reading = action.payload.reading;
      state.allTask = action.payload.allTask;
    },
    setTranslation(state: ResultSliceState, action: PayloadAction<Result>) {
      state.translation.right = action.payload.right;
      state.translation.error = action.payload.error;
    },
    setSpeed(state: ResultSliceState, action: PayloadAction<Result>) {
      state.speed.right = action.payload.right;
      state.speed.error = action.payload.error;
    },
    setReading(state: ResultSliceState, action: PayloadAction<Result>) {
      state.reading.right = action.payload.right;
      state.reading.error = action.payload.error;
    },
    addRight(state: ResultSliceState, action: PayloadAction<string>) {
      switch (action.payload) {
        case "translation": {
          state.translation.right += 2;
          break;
        }
        case "speed": {
          state.speed.right += 2;
          break;
        }
        case "reading": {
          state.reading.right += 2;
          break;
        }
        default: {
          break;
        }
      }
    },
    addError(state: ResultSliceState, action: PayloadAction<string>) {
      switch (action.payload) {
        case "translation": {
          state.translation.error += 2;
          break;
        }
        case "speed": {
          state.speed.error += 2;
          break;
        }
        case "reading": {
          state.reading.error += 2;
          break;
        }
        default: {
          break;
        }
      }
    },
    setAll(state: ResultSliceState, action: PayloadAction<number>) {
      state.allTask = action.payload;
    }
  }, 
})

export const { setResult, setTranslation, setSpeed, setReading, addRight, addError, setAll } = ResultSlice.actions;

export default ResultSlice.reducer;
