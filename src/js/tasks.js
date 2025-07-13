import { saveInLs } from './local-storage-api';

export const addTask = () => {
  //....
  saveInLs('tasks', tasks);
};

export const deleteTask = () => {};
