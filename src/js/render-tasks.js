import { refs } from './refs';

export const render = tasks => {
  const markup = tasks
    .map(item => {
      return `
    <li class="task-list-item">
    <button class="task-list-item-btn">
      Delete
    </button>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    </li>`;
    })
    .join('');
  refs.list.innerHTML = markup;
};
