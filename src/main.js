import { refs } from './js/refs';
import { addTask, getTasks } from './js/tasks';
import { deleteTask } from './js/tasks';

getTasks();

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  // const title = refs.form.elements["taskName"].value.trim();
  // const description = refs.form.elements['taskDescription'].value.trim();

  const title = refs.taskName.value.trim();
  const description = refs.taskDescription.value.trim();

  const task = {};

  if (!title || !description) {
    alert('Заповніть усі поля!');
    return;
  }
  task.title = title;
  task.description = description;

  addTask(task);

  refs.form.reset();
});

refs.list.addEventListener('click', event => {
  event.preventDefault();
  // const textTitle = event.target.nextElementSibling.textContent || '';
  const nextElement = event.target.nextElementSibling;
  const textTitle = nextElement ? nextElement.textContent || '' : '';
  const nextNextElement = nextElement ? nextElement.nextElementSibling : null;
  const textDeskr = nextNextElement ? nextNextElement.textContent || '' : '';

  deleteTask(textTitle, textDeskr);
});
