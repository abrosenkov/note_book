import { refs } from './js/refs';
import { saveInLs } from './js/local-storage-api';
// import { addTask } from './js/tasks';

const tasks = [];

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const title = refs.taskName.value.trim();
  const description = refs.taskDescription.value.trim();

  const task = {};

  if (!title || !description) {
    alert('Inputs are empty!');
    return;
  } else {
    task.title = title;
    task.description = description;
  }

  tasks.push(task);

  // console.log(title);
  // console.log(description);
  console.log(tasks);
  // {title, description}
  // addTask({ title, description });

  // tasks.map(item => {
  //   const markItem = `
  //   <li class="task-list-item">
  //     <button class="task-list-item-btn">
  //       Delete
  //     </button>
  //     <h3>${item.title}</h3>
  //     <p>${item.description}</p>
  //   </li>`;
  //   refs.list.insertAdjacentHTML('beforeend', markItem);
  // });

  tasks.map(item => {
    saveInLs(item.title, item.description);
  });
});

export default tasks;
