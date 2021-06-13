let add_btn = document.getElementById("add-task-button");
let input_task = document.getElementById("input-task");
let ul = document.getElementsByTagName("ul");
// let context = '<input type="checkbox"><span class="task">'+ inputText.value +'</span><button class="delete-btn" onclick="return this.parentNode.remove();"></button>';
add_btn.addEventListener("click", new_task);

function elem() {
    let del_btn = document.querySelectorAll(".delete-btn");
    del_btn.forEach(function (item) {
        item.addEventListener("click", function () {
            this.parentNode.remove();
            alert("Запись удалена");
        })
    })
}
function new_task() {
    if (input_task.value !== ""){
        let li = document.createElement("li");
        let input = document.createElement("input");
        let span = document.createElement("span");
        let task_text = document.createTextNode(input_task.value);
        let del_btn = document.createTextNode("Delete")
        let button = document.createElement("button");
        input.type = "checkbox";
        span.className = "task";
        button.className = "delete-btn";
        ul[0].appendChild(li);
        li.appendChild(input);
        li.appendChild(span);
        span.appendChild(task_text);
        li.appendChild(button);
        button.appendChild(del_btn);
        input_task.value = "";
        elem();
    } else {
        alert("Введите задание");
    }
}