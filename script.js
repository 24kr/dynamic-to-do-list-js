document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Retrieve and trim the input value

        // Check if the task text is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if the input is empty
        }

        const li = document.createElement('li');
        li.textContent = taskText;
        const removeBtn = document.createElement('span');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Add event listener to remove button
        removeBtn.addEventListener('click', () => {
            li.remove();
        });

        // Clear the input field after adding the task
        taskInput.value = '';
    };

    // Event listener for the add task button
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        addTask();
    });

    // Event listener for the Enter key press to add task
    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTask();
        }
    });

    // Optional: Initial tasks fetching logic or other initialization can go here
});
