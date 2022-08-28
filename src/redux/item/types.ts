export interface ItemSliceState {
  source: string;
  translate: string;
  status: Status;
}

export interface GetItemParams {
  text: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface Translate {
  translatedText: string;
}