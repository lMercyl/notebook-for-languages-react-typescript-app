import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemSliceState, Status, Translate } from './types';
import { Item } from "../vocabulary/types"
import { fetchItem } from './asyncAction';

const initialState: ItemSliceState = {
  source: "",
  translate: "",
  status: Status.LOADING
};

const ItemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem(state: ItemSliceState, action: PayloadAction<Item>) {
      state.source = action.payload.source;
      state.translate = action.payload.translate;
    },
    onChangeItem(state: ItemSliceState, action: PayloadAction<string>) {
      state.source = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchItem.pending, (state: ItemSliceState, action: PayloadAction) => {
      state.translate = "";
      state.status = Status.LOADING;
    });
    builder.addCase(fetchItem.fulfilled, (state: ItemSliceState, action: PayloadAction<Translate>) => {
      state.translate = action.payload.translatedText;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchItem.rejected, (state: ItemSliceState, action: PayloadAction) => {
      state.translate = "";
      state.status = Status.ERROR;
    });
  }, 
})

export const { onChangeItem, setItem } = ItemSlice.actions;

export default ItemSlice.reducer
