document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const search = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', updateOrDeleteTask);
    search.addEventListener('input', searchTasks);

    function addTask(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${title}</td>
            <td>${description}</td>
            <td>${dueDate}</td>
            <td>${priority}</td>
            <td class="status">Pending</td>
            <td>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </td>
        `;

        taskList.appendChild(tr);

        taskForm.reset();
    }

function updateOrDeleteTask(e) {
    if (e.target.classList.contains('complete')) {
        const statusCell = e.target.parentElement.previousElementSibling;
        statusCell.textContent = statusCell.textContent === 'Pending' ? 'Completed' : 'Pending';
    } else if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
}
function searchTasks() {
    const searchText = search.value.toLowerCase();
    const tasks = taskList.getElementsByTagName('tr');

    Array.from(tasks).forEach(function(task) {
        const title = task.getElementsByTagName('td')[0].textContent;

        if (title.toLowerCase().indexOf(searchText) != -1) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
}
});