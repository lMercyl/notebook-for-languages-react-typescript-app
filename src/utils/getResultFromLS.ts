export const getResultFromLS = () => {
  if (localStorage.getItem('result')) {
    const data = localStorage.getItem('result');
    if (typeof data !== "undefined" && data !== null) {
      const result = JSON.parse(data);
      return result;
    } else {
      return {
        right: 0,
        error: 0,
        all: 0,
      }
    }
  } else {
    return {
      right: 0,
      error: 0,
      all: 0,
    }
  }
}