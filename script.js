// ================= LOCAL STORAGE =================
function saveTasks() {
    localStorage.setItem("todo2026", JSON.stringify(tasks));
}

function loadTasks() {
    return JSON.parse(localStorage.getItem("todo2026")) || [];
}

// ================= ESTADO GLOBAL =================
let tasks = loadTasks();

// ================= TECLADO =================
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}

// ================= RENDER =================
function renderTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        var li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <label>
                <input type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTaskCompletion(${i})">
                ${task.text}
            </label>
        `;

        taskList.appendChild(li);
    }

    updateTaskCount();
}

// ================= ADD TASK =================
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.unshift({
            text: taskText,
            completed: false
        });

        saveTasks();
        renderTasks();
        taskInput.value = "";
    }
}

// ================= TOGGLE =================
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// ================= CONTADOR =================
function updateTaskCount() {
    var activeTaskCount = 0;

    for (var i = 0; i < tasks.length; i++) {
        if (!tasks[i].completed) {
            activeTaskCount++;
        }
    }

    document.getElementById("taskCount").textContent =
        activeTaskCount + " tarefas restantes";
}

// ================= CLEAR COMPLETED =================
function clearCompl() {
    tasks = tasks.filter(function (task) {
        return !task.completed;
    });

    saveTasks();
    renderTasks();
}

// ================= FILTROS =================
function filterTasks(taskType) {
    var taskList = document.getElementById("taskList");
    var items = taskList.getElementsByTagName("li");

    for (var i = 0; i < items.length; i++) {
        if (taskType === "completed") {
            items[i].style.display = tasks[i].completed ? "block" : "none";
        } 
        else if (taskType === "active") {
            items[i].style.display = !tasks[i].completed ? "block" : "none";
        }
    }
}

function showAllTasks() {
    var items = document.getElementById("taskList").getElementsByTagName("li");

    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "block";
    }
}

// ================= TEMA =================
function toggleTheme() {
    var themeLight = document.getElementById("themeLight");
    var themeNight = document.getElementById("themeNight");
    var themeSun = document.getElementById("themeSun");
    var themeMoon = document.getElementById("themeMoon");

    if (themeLight.disabled) {
        themeLight.disabled = false;
        themeNight.disabled = true;
        themeSun.style.display = "none";
        themeMoon.style.display = "inline-block";
    } else {
        themeLight.disabled = true;
        themeNight.disabled = false;
        themeMoon.style.display = "none";
        themeSun.style.display = "inline-block";
    }
}

// ================= INIT =================
renderTasks();
