import { saveInLs, getFromLs } from './local-storage-api';
import { render } from './render-tasks';

let tasks = getFromLs('tasks') || [];

export const getTasks = () => {
  render(tasks);
};

export const addTask = task => {
  tasks.push(task);
  render(tasks);
  saveInLs('tasks', tasks);
};

export const deleteTask = (textTitle, textDeskr) => {
  const itemFilter = tasks.filter(item => {
    return item.title !== textTitle && item.description !== textDeskr;
  });
  tasks = itemFilter;
  saveInLs('tasks', tasks);

  render(itemFilter);
};
