let taskIdCounter = 0; // Initialize a counter for task IDs

function allowDrop(ev) {
    ev.preventDefault(); // Prevent the default handling of the event to allow dropping
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id); // Set the ID of the dragged element in the data transfer object
}

function drop(ev) {
    ev.preventDefault(); // Prevent the default handling of the event
    const data = ev.dataTransfer.getData("text"); // Get the ID of the dragged element from the data transfer object
    const task = document.getElementById(data); // Get the dragged element by its ID
    const target = ev.target; // Get the drop target element

    // Ensure we're appending to the task container
    if (target.classList.contains("task-container")) {
        target.appendChild(task); // Append the task to the target if it's a task container
    } else if (target.classList.contains("column")) {
        target.querySelector(".task-container").appendChild(task); // Append the task to the target's task container if the target is a column
    }
}

function addTask() {
    const taskText = prompt("Enter task description:"); // Prompt the user for a task description
    const assignedTo = prompt("Assign to:"); // Prompt the user for an assignee
    if (taskText) {
        const taskContainer = document.createElement("div"); // Create a new div element for the task
        taskContainer.className = "task"; // Set the class of the task container
        taskContainer.id = `task-${taskIdCounter++}`; // Set the ID of the task container and increment the counter
        taskContainer.draggable = true; // Make the task container draggable
        taskContainer.ondragstart = drag; // Set the drag event handler for the task container
        taskContainer.innerHTML = `
            <p>${taskText}</p>
            <p>Assigned to: ${assignedTo}</p>
            <button onclick="editTask('${taskContainer.id}')">Edit</button>
            <button onclick="deleteTask('${taskContainer.id}')">Delete</button>
        `; // Set the inner HTML of the task container
        document.querySelector("#dev .task-container").appendChild(taskContainer); // Append the task container to the dev task container
    }
}

function editTask(id) {
    const task = document.getElementById(id); // Get the task element by its ID
    const taskText = prompt("Edit task description:", task.querySelector("p").innerText); // Prompt the user to edit the task description
    const assignedTo = prompt("Assign to:", task.querySelector("p:nth-child(2)").innerText.split(": ")[1]); // Prompt the user to edit the assignee
    if (taskText) {
        task.querySelector("p").innerText = taskText; // Update the task description
        task.querySelector("p:nth-child(2)").innerText = `Assigned to: ${assignedTo}`; // Update the assignee
    }
}

function deleteTask(id) {
    const task = document.getElementById(id); // Get the task element by its ID
    task.parentNode.removeChild(task); // Remove the task element from its parent node
};
