export const shuffle = (arr: Array<any>) => {
  let j : number;
  let temp : any;
  for (let i : number = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};