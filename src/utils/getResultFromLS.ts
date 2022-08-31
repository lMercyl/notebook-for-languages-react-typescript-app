const initialResult = {
  right: 0,
  error: 0,
}

export const getResultFromLS = () => {
  if (localStorage.getItem('result')) {
    const data = localStorage.getItem('result');
    if (typeof data !== "undefined" && data !== null) {
      const result = JSON.parse(data);
      return result;
    } else {
      return {
        translation: initialResult,
        speed: initialResult,
        reading: initialResult,
        allTask: 0
      }
    }
  } else {
    return {
      translation: initialResult,
      speed: initialResult,
      reading: initialResult,
      allTask: 0
    }
  }
}