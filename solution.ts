console.log("STRATING PROJECT");

// let text = (<HTMLInputElement>document.querySelector("#todo-item")).value;
let text: HTMLInputElement = document.querySelector("#todo-item")

// HTMLElement;let textId:any = document.getElementById("#todo-item");
HTMLElement;let todoSave:any = document.querySelector("#todo-save");
HTMLElement;let todoList:any = document.querySelector("#todo-list");

// let text=textId.value;
// let saveTask = todoSave

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
    console.log(text.value)
    let newTask = new Task(count,text.value);

    tasksArr.push(newTask)

    localStorage.setItem("Obj", JSON.stringify(tasksArr))

    location.reload()
});


// function clearAll() {

//     text = '';

// }
  window.onload = (): void => {

    // clearAll();

    if (JSON.parse(localStorage.getItem("Obj"))) {

        tasksArr = JSON.parse(localStorage.getItem("Obj"))
        //console.log(notesArr)
        count = tasksArr.length
        console.log(tasksArr)
        for (let task of tasksArr) {

          if(task != null) {

              let div = document.createElement("div")

            div.classList.add("todo-row");
            console.log(text);
            div.innerHTML = `<span id='${task["_id"]}' class='todo-item'>${task["_txt"]}</span><button class='todo-ok' onclick='done(${task["_id"]})'><i class="fas fa-check text-success"></i></button>`

            todoList.append(div)
            console.log(todoList);
          }
        }
    }

    else {
      count = 0
    }
}

function done(key: number): void {

    console.log(todoList.children);

    // for (let i = 0 ; i < todoList.length ; i++) {
  
    //   if (todoList[i] != null) {
    //     if (todoList[i]["_id"] == key) {
    //         console.log(todoList[i]);
    //       break
    //     }
    //   }
    // }
  
    // localStorage.removeItem("Obj")
    // localStorage.setItem("Obj", JSON.stringify(notesArr))
  
    // location.reload()
  }