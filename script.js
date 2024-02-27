

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
        newTaskItem.innerHTML = `<input type="checkbox" onchange="toggleTaskCompletion(this)"> ${taskText}`;
        taskList.appendChild(newTaskItem);
        taskInput.value = ""; // Limpar o campo de entrada após adicionar a tarefa
    }
}

function clearCompl() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}