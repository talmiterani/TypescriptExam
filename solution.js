var text = document.querySelector("#todo-item");
HTMLElement;
var todoSave = document.querySelector("#todo-save");
HTMLElement;
var todoList = document.querySelector("#todo-list");
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
    if (text.value == '') {
        return;
    }
    updateArrId();
    var newTask = new Task(count, text.value);
    tasksArr.push(newTask);
    localStorage.setItem("Obj", JSON.stringify(tasksArr));
});
function deleteAll() {
    var items = JSON.parse(localStorage.getItem("Obj"));
    items = [];
    for (var i = 0; i < todoList.children.length; i++) {
        todoList.children[i].remove();
        i--;
    }
    items = JSON.stringify(items);
    localStorage.setItem("Obj", items);
    location.reload();
}
window.onload = function () {
    updateArrId();
    if (JSON.parse(localStorage.getItem("Obj"))) {
        tasksArr = JSON.parse(localStorage.getItem("Obj"));
        count = tasksArr.length;
        for (var _i = 0, tasksArr_1 = tasksArr; _i < tasksArr_1.length; _i++) {
            var task = tasksArr_1[_i];
            if (task != null) {
                var div = document.createElement("div");
                div.classList.add("todo-row");
                div.innerHTML = "<span id='" + task["_id"] + "' class='todo-item'>" + task["_txt"] + "</span><button class='todo-ok cx' onclick='done(" + task["_id"] + ")'><i class=\"fas fa-check text-success\"></i></button>";
                todoList.append(div);
            }
        }
    }
    else {
        count = 0;
    }
};
function done(key) {
    var spanArr = document.getElementsByTagName('span');
    for (var i = 0; i < todoList.children.length; i++) {
        if (todoList.children[i].children[0].id == key) {
            todoList.children[i].children[0].classList.add('done');
            break;
        }
    }
    console.log(spanArr);
}
function deleteCompleted() {
    var items = JSON.parse(localStorage.getItem("Obj"));
    for (var i = 0; i < todoList.children.length; i++) {
        if (todoList.children[i] != null) {
            if (todoList.children[i].children[0].classList.contains("done")) {
                todoList.children[i].remove();
                items.splice(i, 1);
                i--;
            }
        }
    }
    items = JSON.stringify(items);
    localStorage.setItem("Obj", items);
    location.reload();
}
function updateArrId() {
    for (var i = 0; i < count; i++) {
        todoList.children[i].children[0].id = i;
    }
    var tempArr = JSON.parse(localStorage.getItem("Obj"));
    for (var i = 0; i < tempArr.length; i++) {
        tempArr[i]._id = i;
    }
    tempArr = JSON.stringify(tempArr);
    localStorage.setItem("Obj", tempArr);
}
