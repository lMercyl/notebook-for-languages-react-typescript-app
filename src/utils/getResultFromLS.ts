export const getResultFromLS = () => {
  if (localStorage.getItem('result')) {
    const data = localStorage.getItem('result');
    if (typeof data !== "undefined" && data !== null) {
      const result = JSON.parse(data);
      return result.all !== 0 ? result : {
        right: 0,
        error: 0,
        all: 0,
      };
    }
  }
}