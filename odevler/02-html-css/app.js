function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;

  const ul = document.getElementById('taskList');
  const emptyMsg = ul.querySelector('.empty-msg');
  if (emptyMsg) emptyMsg.remove();

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${text}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  ul.appendChild(li);
  input.value = '';
  input.focus();
}

function deleteTask(btn) {
  btn.closest('li').remove();
}

document.getElementById('taskInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addTask();
});

//Su dalgası (ripple) efekt

document.addEventListener('click', function (e) {
  const interactiveSelectors = [
    '.glass-panel',
    'button',
    'input',
    'a',
    '.statue-wrapper',
    'header',
    '[data-no-ripple]'
  ];

  const isInteractive = interactiveSelectors.some(selector =>
    e.target.closest(selector)
  );

  if (isInteractive) return;

  const ripple = document.createElement('div');
  ripple.className = 'water-ripple';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';

  document.body.appendChild(ripple);

  ripple.addEventListener('animationend', () => ripple.remove());
});

