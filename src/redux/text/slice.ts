import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TextSliceState, Text } from './types';

const initialState: TextSliceState = {
  content: []
};

const TextSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText(state: TextSliceState, action: PayloadAction<Array<Text>>) {
      state.content = action.payload;
    },
  },
})

export const { setText } = TextSlice.actions;

export default TextSlice.reducer
