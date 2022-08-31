export interface Result {
  right: number;
  error: number;
}
export interface ResultSliceState {
  translation: Result;
  speed: Result;
  reading: Result;
  allTask: number;
}