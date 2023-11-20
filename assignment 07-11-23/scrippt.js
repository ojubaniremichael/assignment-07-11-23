
function addItem() {
    var newItemText = document.getElementById("newItem").value;
    var itemList = document.getElementById("itemList");

    if (newItemText.trim() !== "") {
        var newItem = document.createElement("li");
        newItem.appendChild(document.createTextNode(newItemText));
        itemList.appendChild(newItem);
        document.getElementById("newItem").value = "";
    }
}

var counterValue = 0;

function updateCounter() {
    document.getElementById("counter").innerText = counterValue;
}

function increment() {
    counterValue++;
    updateCounter();
}

function decrement() {
    counterValue--;
    updateCounter();
}


function addTask() {
    var newTaskText = document.getElementById("newTask").value;
    var taskList = document.getElementById("taskList");

    if (newTaskText.trim() !== "") {
        var newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = newTaskText + ' <button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(newTaskItem);
        document.getElementById("newTask").value = "";
    }
}

function deleteTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}



function changeColor() {
    var section4 = document.getElementById("section4");
    var colorCodeDisplay = document.getElementById("colorCode");

    var randomColor = getRandomColor();
    section4.style.backgroundColor = randomColor;
    colorCodeDisplay.innerText = "Hex Code: " + randomColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

