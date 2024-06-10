let taskIdCounter = 0;

function addTask() {
    const taskText = prompt("Enter task description:");
    const assignedTo = prompt("Assign to:");
    if (taskText) {
        const taskContainer = document.createElement("div");
        taskContainer.className = "task";
        taskContainer.id = `task-${taskIdCounter++}`;
        taskContainer.draggable = true;
        taskContainer.ondragstart = drag;
        taskContainer.innerHTML = `
            <p>${taskText}</p>
            <p>Assigned to: ${assignedTo}</p>
            <button onclick="editTask('${taskContainer.id}')">Edit</button>
            <button onclick="deleteTask('${taskContainer.id}')">Delete</button>
        `;
        document.querySelector("#dev .task-container").appendChild(taskContainer);
    }
}