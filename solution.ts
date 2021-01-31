
let text: HTMLInputElement = document.querySelector("#todo-item")
HTMLElement;let todoSave:any = document.querySelector("#todo-save");
HTMLElement;let todoList:any = document.querySelector("#todo-list");
let tasksArr: Array<Task> = []
let count:number;
class Task {
    private _id: number
    private _txt: string 
    constructor(id: number, txt: string) {
        this._id = id
        this._txt = txt;
    }
    get id(): number {
        return this._id;
    }
    set id(newId: number) {
        this._id = newId;
    }
    get txt(): string {
        return this._txt;
    }
    set txt(newTxt: string) {          
        this._txt = newTxt;
    }
}
todoSave.addEventListener("click", ():void => {
    if(text.value==''){
        return;
    }
    updateArrId()
    let newTask = new Task(count,text.value);
    tasksArr.push(newTask)
    localStorage.setItem("Obj", JSON.stringify(tasksArr))
});
function deleteAll() {

    let items = JSON.parse(localStorage.getItem("Obj"));
    items = [];
    for (let i = 0 ; i < todoList.children.length ; i++) {
            todoList.children[i].remove();
            i--;
        
    }
    items = JSON.stringify(items);
    localStorage.setItem("Obj", items);
    location.reload()

}
  window.onload = (): void => {
    updateArrId()
    if (JSON.parse(localStorage.getItem("Obj"))) {

        tasksArr = JSON.parse(localStorage.getItem("Obj"))
        count = tasksArr.length;
        for(let task of tasksArr) {

          if(task != null) {

            let div = document.createElement("div")

            div.classList.add("todo-row");
            div.innerHTML = `<span id='${task["_id"]}' class='todo-item'>${task["_txt"]}</span><button class='todo-ok cx' onclick='done(${task["_id"]})'><i class="fas fa-check text-success"></i></button>`

            todoList.append(div)
          }
        }
    }
    else {
      count = 0
    }
}

function done(key: number): void {
    let spanArr = document.getElementsByTagName('span');
    for (let i = 0 ; i < todoList.children.length ; i++) {
        if (todoList.children[i].children[0].id == key) {
            todoList.children[i].children[0].classList.add('done');
            break;
        }
    }
    console.log(spanArr);
  }
function deleteCompleted ():void {
    var items = JSON.parse(localStorage.getItem("Obj"));
    for (let i = 0 ; i < todoList.children.length ; i++) {
  
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
    location.reload()
}
function updateArrId():void{
    for(let i=0;i<count;i++){
        todoList.children[i].children[0].id = i;
    }
    let tempArr = JSON.parse(localStorage.getItem("Obj"));
    for(let i=0;i<tempArr.length;i++){
        tempArr[i]._id = i;
    }
    tempArr = JSON.stringify(tempArr);
    localStorage.setItem("Obj", tempArr);
}