import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AnswerSliceState } from './types';

const initialState: AnswerSliceState = {
  source: "",
  translate: "",
};

const AnswerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setAnswer(state: AnswerSliceState, action: PayloadAction<AnswerSliceState>) {
      state.source = action.payload.source;
      state.translate = action.payload.translate;
    },
    setSource(state: AnswerSliceState, action: PayloadAction<string>) {
      state.source = action.payload;
    },
    setTranslate(state: AnswerSliceState, action: PayloadAction<string>) {
      state.translate = action.payload;
    }
  }, 
})

export const { setAnswer, setSource, setTranslate } = AnswerSlice.actions;

export default AnswerSlice.reducer;
