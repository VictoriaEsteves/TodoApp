

function handleKeyPress(event) {
    console.log("Tecla pressionada:", event.keyCode);
    if (event.keyCode === 13) { // Verifica se a tecla pressionada é a tecla "Enter"
        addTask(); // Chama a função addTask() para adicionar uma nova tarefa
    }
}
/*
function handleKeyPress(event) {
    if (event.keyCode === 13) { // Verifica se a tecla pressionada é a tecla "Enter"
        addTask(); // Chama a função addTask() para adicionar uma nova tarefa
    }
}
*/
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim(); // Remove espaços em branco no início e no final
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = `<label><input type="checkbox" onchange="toggleTaskCompletion(this)"> ${taskText}</label>`;
        
        
        var firstTaskItem = taskList.firstChild;
        taskList.insertBefore(newTaskItem, firstTaskItem);
        
        
        taskInput.value = ""; // Limpar o campo de entrada após adicionar a tarefa
        updateTaskCount();
    }

}

function toggleTaskCompletion(checkbox) {
    var taskItem = checkbox.parentNode.parentNode; // Obtém o elemento li pai do checkbox
    
    if (checkbox.checked) {
        taskItem.classList.add("completed"); // Adiciona a classe "completed" para estilização
    } else {
        taskItem.classList.remove("completed"); // Remove a classe "completed"
    }
    updateTaskCount();
}

function updateTaskCount() {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.getElementsByTagName("li");
    var activeTaskCount = 0;
    
    for (var i = 0; i < tasks.length; i++) {
        var taskItem = tasks[i];
        if (!taskItem.classList.contains('completed')) {
            activeTaskCount++; // Incrementa o contador de tarefas ativas
        }
    }
    
    var taskCountElement = document.getElementById("taskCount");
    taskCountElement.textContent = activeTaskCount + " tarefas restantes"; // Atualiza o texto com a contagem de tarefas ativas
}

function clearCompl() {
    var taskList = document.getElementById("taskList");
    var completedTasks = taskList.querySelectorAll('.completed');

    // Remove todas as tarefas concluídas da lista
    for (var i = 0; i < completedTasks.length; i++) {
        taskList.removeChild(completedTasks[i]);
    }

    updateTaskCount(); // Atualiza a contagem de tarefas restantes
}

function filterTasks(taskType) {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.getElementsByTagName("li");

    for (var i = 0; i < tasks.length; i++) {
        var taskItem = tasks[i];
        if (taskType === 'completed' && taskItem.classList.contains('completed')) {
            taskItem.style.display = 'block'; // Mostra as tarefas concluídas
        } else if (taskType === 'active' && !taskItem.classList.contains('completed')) {
            taskItem.style.display = 'block'; // Mostra as tarefas ativas
        } else {
            taskItem.style.display = 'none'; // Oculta as tarefas que não correspondem ao tipo selecionado
        }
    }
}

function showAllTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.getElementsByTagName("li");

    for (var i = 0; i < tasks.length; i++) {
        tasks[i].style.display = 'block'; // Mostra todas as tarefas
    }
}

function toggleTheme() {
    var themeLight = document.getElementById("themeLight");
    var themeNight = document.getElementById("themeNight");
    var themeSun = document.getElementById("themeSun");
    var themeMoon = document.getElementById("themeMoon");

    if (themeLight.disabled) {
        themeLight.disabled = false;
        themeNight.disabled = true;
    } else {
        themeLight.disabled = true;
        themeNight.disabled = false;
    }

    if (themeSun.style.display === "inline-block" || themeSun.style.display === "") {
        themeSun.style.display = "none";
        themeMoon.style.display = "inline-block";
    } else {
        themeMoon.style.display = "none";
        themeSun.style.display = "inline-block";
    }
}

/*
function toggleTheme() {
var themeLight = document.getElementById("themeLight");
var themeNight = document.getElementById("themeNight");

if (themeLight.disabled) {
    themeLight.disabled = false;
    themeNight.disabled = true;
} else {
    themeLight.disabled = true;
    themeNight.disabled = false;
}

var themeSun = document.getElementById("themeSun");
var themeMoon = document.getElementById("themeMoon");

if (themeSun.style.display == "inline-block") {
    themeSun.style.display = "none";
    themeMoon.style.display = "inline-block";
} else {
    themeMoon.style.display = "none";
    themeSun.style.display = "inline-block";
}
}
function toggleTheme() {
    var themeLight = document.getElementById("themeLight");
    var themeNight = document.getElementById("themeNight");
    
    if (themeLight.disabled) {
        themeLight.disabled = false;
        themeNight.disabled = true;
        themeSun.style.display = "none";
    } else {
        themeLight.disabled = true;
        themeNight.disabled = false;
        themeMoon.style.display = "inline-block";
    }
}


function toggleTheme() {
    var themeSun = document.getElementById("themeLight");
    var themeMoon = document.getElementById("themeNight");
    
    if (themeSun.style.display == "inline-block") {
        themeSun.style.display = "none";
        themeMoon.style.display = "inline-block";
    } else {
        themeMoon.style.display = "none";
        themeSun.style.display = "inline-block";
    }
}
*/