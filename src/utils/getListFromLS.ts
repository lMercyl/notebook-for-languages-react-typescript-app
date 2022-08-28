export const getListFromLS = () => {
  if (localStorage.getItem('list')) {
    const data = localStorage.getItem('list');
    if (typeof data !== "undefined" && data !== null) {
      const list = JSON.parse(data);
      return list.length !== 0 ? list : [];
    }
  }
}