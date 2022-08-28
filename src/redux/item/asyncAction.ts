import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ItemSliceState, GetItemParams } from "./types";

export const fetchItem = createAsyncThunk<ItemSliceState, GetItemParams>('item/fetchItem', async (params) => {
  const { text } = params;
  const { data } = await axios.post(`https://libretranslate.de/translate`, {
    q: text,
    source: 'en',
    target: 'ru',
  });
  return data;
});