document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const search = document.getElementById('search');

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
});