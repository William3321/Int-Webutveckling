const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const counter = document.getElementById("Counter");


function addTask(){
    if(inputBox.value === ''){
        alert("You need to enter something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        countCompletedTasks()
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        countCompletedTasks()
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function countCompletedTasks() {
    const checkedTasks = document.querySelectorAll('.checked');
    counter.textContent = checkedTasks.length; // Update the counter with the count of completed tasks
}

showTask()
countCompletedTasks()



