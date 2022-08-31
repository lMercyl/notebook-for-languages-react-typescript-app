import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostionsSliceState } from './types';

const initialState: PostionsSliceState = {
  position: [],
  variant: []
};

const PositionsSlce = createSlice({
  name: 'position',
  initialState,
  reducers: {
    setPosition(state: PostionsSliceState, action: PayloadAction<Array<number>>) {
      state.position = action.payload;
    },
    setVariant(state: PostionsSliceState, action: PayloadAction<Array<string>>) {
      state.variant = action.payload;
    }
  }, 
})

export const { setPosition, setVariant } = PositionsSlce.actions;

export default PositionsSlce.reducer;
