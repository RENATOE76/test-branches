document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  // Cargar tareas
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = task.completed ? 'completed' : '';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        tasks[index].completed = checkbox.checked;
        saveTasks();
        renderTasks();
        // Dentro del forEach, después de crear el text span:
text.addEventListener('dblclick', () => {
  const newText = prompt('Editar tarea:', task.text);
  if (newText !== null && newText.trim() !== '') {
    tasks[index].text = newText.trim();
    saveTasks();
    renderTasks();
  }
});
      });

      const text = document.createElement('span');
      text.textContent = task.text;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.className = 'delete-btn';
      deleteBtn.addEventListener('click', () => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      });

      li.appendChild(checkbox);
      li.appendChild(text);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  // Agregar tarea
  function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = '';
  }

  addBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTask();
  });

  renderTasks();
});