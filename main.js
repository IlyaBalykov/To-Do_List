let add_btn = document.getElementById("add-task-button");
let input_task = document.getElementById("input-task");
let ul = document.getElementsByTagName("ul");
add_btn.addEventListener("click", new_task);
elem();
check();
function check() {
    let checkbox = document.querySelectorAll("li > input");
    checkbox.forEach(function (done) {
        done.addEventListener("click", function () {
            const span = this.parentElement.getElementsByTagName("span");
            if(this.checked) {
                span[0].style.textDecoration = "line-through";
                console.log("Выбрано");
            } else {
                span[0].removeAttribute("style");
                console.log("Выделение снято");
            }
        })
    })
}
function elem() {
    let del_btn = document.querySelectorAll(".delete-btn");
    del_btn.forEach(function (item) {
        item.addEventListener("click", function () {
            this.parentNode.remove();
            console.log("Запись удалена");
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
        check();
    } else {
        alert("Введите задание");
    }
}