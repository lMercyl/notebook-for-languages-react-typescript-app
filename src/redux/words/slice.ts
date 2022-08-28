import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WordsSliceState } from './types';

const initialState: WordsSliceState = {
  sources: [],
  translations: []
};

const WordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setWords(state: WordsSliceState, action: PayloadAction<WordsSliceState>) {
      state.sources = action.payload.sources;
      state.translations = action.payload.translations;
    },
    removeSource(state: WordsSliceState, action: PayloadAction<string>) {
      state.sources = state.sources.filter(word => word !== action.payload);
    },
    removeTranslation(state: WordsSliceState, action: PayloadAction<string>) {
      state.translations = state.translations.filter(word => word !== action.payload);
    }
  }, 
})

export const { setWords, removeSource, removeTranslation } = WordsSlice.actions;

export default WordsSlice.reducer;
