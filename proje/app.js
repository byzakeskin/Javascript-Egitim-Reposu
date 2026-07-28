function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;
    span.onclick = function () { completeTask(this); };

    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.textContent = 'delete';
    btn.onclick = function () { deleteTask(this); };

    li.appendChild(span);
    li.appendChild(btn);

    document.getElementById('taskList').appendChild(li);

    input.value = "";
    input.focus();
}

function completeTask(el) {
    el.classList.toggle('completed');
}

function deleteTask(el) {
    el.parentElement.remove();
}
