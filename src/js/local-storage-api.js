export const saveInLs = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
