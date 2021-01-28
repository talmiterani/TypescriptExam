console.log("STRATING PROJECT");
// let text = (<HTMLInputElement>document.querySelector("#todo-item")).value;
var text = document.querySelector("#todo-item");
// HTMLElement;let textId:any = document.getElementById("#todo-item");
HTMLElement;
var todoSave = document.querySelector("#todo-save");
HTMLElement;
var todoList = document.querySelector("#todo-list");
// let text=textId.value;
// let saveTask = todoSave
var tasksArr = [];
var count;
var Task = /** @class */ (function () {
    function Task(id, txt) {
        this._id = id;
        this._txt = txt;
    }
    Object.defineProperty(Task.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (newId) {
            this._id = newId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "txt", {
        get: function () {
            return this._txt;
        },
        set: function (newTxt) {
            this._txt = newTxt;
        },
        enumerable: false,
        configurable: true
    });
    return Task;
}());
todoSave.addEventListener("click", function () {
    console.log(text.value);
    var newTask = new Task(count, text.value);
    tasksArr.push(newTask);
    localStorage.setItem("Obj", JSON.stringify(tasksArr));
    location.reload();
});
// function clearAll() {
//     text = '';
// }
window.onload = function () {
    // clearAll();
    if (JSON.parse(localStorage.getItem("Obj"))) {
        tasksArr = JSON.parse(localStorage.getItem("Obj"));
        //console.log(notesArr)
        count = tasksArr.length;
        console.log(tasksArr);
        for (var _i = 0, tasksArr_1 = tasksArr; _i < tasksArr_1.length; _i++) {
            var task = tasksArr_1[_i];
            if (task != null) {
                var div = document.createElement("div");
                div.classList.add("todo-row");
                console.log(text);
                div.innerHTML = "<span id='" + task["_id"] + "' class='todo-item'>" + task["_txt"] + "</span><button class='todo-ok' onclick='done(" + task["_id"] + ")'><i class=\"fas fa-check text-success\"></i></button>";
                todoList.append(div);
                console.log(todoList);
            }
        }
    }
    else {
        count = 0;
    }
};
function done(key) {
    console.log(todoList.children);
    for (var i = 0; i < todoList.length; i++) {
        if (todoList[i] != null) {
            if (todoList[i]["_id"] == key) {
                console.log(todoList[i]);
                break;
            }
        }
    }
    // localStorage.removeItem("Obj")
    // localStorage.setItem("Obj", JSON.stringify(notesArr))
    // location.reload()
}
