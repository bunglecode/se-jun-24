let taskIdCounter = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const task = document.getElementById(data);
    const target = ev.target;
    
    if (target.classList.contains("task-container")) {
        target.appendChild(task);
    } else if (target.classList.contains("column")) {
        target.querySelector(".task-container").appendChild(task);
    }
}

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

function editTask(id) {
    const task = document.getElementById(id);
    const taskText = prompt("Edit task description:", task.querySelector("p").innerText);
    const assignedTo = prompt("Assign to:", task.querySelector("p:nth-child(2)").innerText.split(": ")[1]);
    if (taskText) {
        task.querySelector("p").innerText = taskText;
        task.querySelector("p:nth-child(2)").innerText = `Assigned to: ${assignedTo}`;
    }
}

function deleteTask(id) {
    const task = document.getElementById(id);
    task.parentNode.removeChild(task);
}