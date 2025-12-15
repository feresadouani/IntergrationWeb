// 1️⃣ Make kanban lists sortable using SortableJS
const lists = document.querySelectorAll('.kanban-list');

lists.forEach(list => {
  new Sortable(list, {
    group: 'kanban',      // allows tasks to move between columns
    animation: 150,       // smooth animation
    ghostClass: 'dragging' // class applied while dragging
  });
});

// 2️⃣ Add task button functionality
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.querySelector('.kanban-column:first-child .kanban-list');

// Array of possible card colors
const colors = ['card-yellow', 'card-green', 'card-blue', 'card-orange'];

addTaskBtn.addEventListener('click', () => {
  // Prompt for task name
  const taskName = prompt('Enter task name:');
  if (!taskName) return; // Exit if empty

  // Create new task card
  const newTask = document.createElement('div');
  newTask.classList.add('kanban-card');

  // Assign a random color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  newTask.classList.add(randomColor);

  newTask.textContent = taskName;

  // Append the new task to TODO list
  todoList.appendChild(newTask);
});
