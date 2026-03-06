function addTask(){

    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    // buttons container
    let btnContainer = document.createElement("div");
    btnContainer.className = "task-buttons";

    // complete button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.classList.add("complete-btn");

    completeBtn.onclick = function(){
        taskSpan.classList.toggle("completed");
    };

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function(){
        li.remove();
    };

    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(btnContainer);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}