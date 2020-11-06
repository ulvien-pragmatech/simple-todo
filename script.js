////////// SELECTORS 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

////////// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

////////// FUNCTIONS

// Add TODO
function addTodo(event) {
    // Prevents from submitting
    event.preventDefault();
    // create todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Add todo to LocalStorage
    saveLocal(todoInput.value);
    // Check Button
    const completedButton = document.createElement('button');
    // Font-awesome Check character
    const checkSign = document.createElement('i');
    checkSign.className = 'fas fa-check'

    // appending sign to button
    completedButton.appendChild(checkSign);
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton)

    // Trash Button
    const trashButton = document.createElement('button');
    // Font-Awesome trash button
    const trashSign = document.createElement('i');
    trashSign.className = 'fas fa-trash';
    // appending sign to button
    trashButton.appendChild(trashSign);
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)

    // Append to List
    todoList.appendChild(todoDiv);
    // Clear Todo Input value
    todoInput.value = '';
}

// Delete & Check

function deleteCheck(e) {
    const item = e.target;

    //Delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    // Check todo
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}