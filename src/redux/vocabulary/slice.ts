import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getListFromLS } from '../../utils/getListFormLS';
import { Item, VocabularySliceState } from './types';


const initialState: VocabularySliceState = getListFromLS();

const VocabularySlice = createSlice({
  name: 'vocabulary',
  initialState,
  reducers: {
    setList(state: VocabularySliceState, action: PayloadAction<Item[]>) {
      state.list = action.payload;
    },
    addItem(state: VocabularySliceState, action: PayloadAction<Item>) {
      state.list.push(action.payload);
    },
    removeItem(state: VocabularySliceState, action: PayloadAction<Item>) {
      state.list = state.list.filter((item: Item) => item.source !== action.payload.source && item.translate !== action.payload.translate);
    },
  },
})

export const { setList, removeItem, addItem } = VocabularySlice.actions;

export default VocabularySlice.reducer
