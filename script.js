document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage and display them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push(li.textContent.replace('Remove', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return; // Exit the function if the input is empty
        }

        const li = document.createElement('li');
        li.textContent = taskText;
        const removeBtn = document.createElement('span');
        removeBtn.textContent = 'Remove'; // Set button text to 'Remove'
        removeBtn.classList.add('remove-btn');
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Add event listener to remove button
        removeBtn.addEventListener('click', () => {
            li.remove();
            saveTasks(); // Update Local Storage after removal
        });

        // Clear the input field after adding the task
        taskInput.value = '';

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Event listener for the add task button
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        addTask(taskInput.value.trim());
    });

    // Event listener for the Enter key press to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTask(taskInput.value.trim());
        }
    });

    // Load tasks when the page loads
    loadTasks();
});
