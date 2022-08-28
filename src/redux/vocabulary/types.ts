export interface Item {
  source: string;
  translate: string;
}

export type VocabularySliceState = {
  list: Item[];
}