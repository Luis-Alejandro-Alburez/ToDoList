document.getElementById('add-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
        todoInput.focus();
    }
});

function addTodoItem(todoText) {
    const todoList = document.getElementById('todo-list');

    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = todoText;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Completed Task';
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const eraseBtn = document.createElement('button');
    eraseBtn.className = 'erase-btn';
    eraseBtn.textContent = 'Erase';
    eraseBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(eraseBtn);

    li.appendChild(span);
    li.appendChild(buttonContainer);

    todoList.appendChild(li);
}