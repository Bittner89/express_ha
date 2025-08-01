let textField = document.getElementById("userInput");
let buttonAddTask = document.getElementById("buttonAddTask");
let taskList = document.getElementById("taskList");

function newTask() {
    const li = document.createElement("li");
    const textFieldValue = textField.value;
    const newTaskText = document.createTextNode(textFieldValue);

    if (textFieldValue === "") {
        alert("Du Depp");
        return;
    }
    li.appendChild(newTaskText)
    const closeButton = document.createElement("span");
    closeButton.className = "closeBtn";
    closeButton.textContent = "✖";
    li.appendChild(closeButton);

    closeButton.onclick = function () {
        this.parentElement.remove();
    };





    taskList.append(li);
    textField.value = "";
}

buttonAddTask.addEventListener("click", newTask);

const todo = fetch("http://127.0.0.1:4001/todo")
  .then((response) => response.json())
  .then((json) => showTasksFromApi(json));


function showTasksFromApi(tasksJSON){
    console.log(tasksJSON[1]);

    for (let i = 0; i < tasksJSON.length; i++) {

        const newLi = document.createElement("li");
        const closeBtn = document.createElement("span");
        closeBtn.className = "closeBtn";
        closeBtn.textContent = "✖";
        closeBtn.onclick = function() {
            this.parentElement.remove();
        };
        newLi.innerText = tasksJSON[i].title;
        newLi.appendChild(closeBtn);
        taskList.appendChild(newLi);
    }    
}