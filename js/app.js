const lists = []

function render() {
    //left side HTML
    let listsHtml = '<div class="list-group">';
    // iterate through the lists to get their names
    for (let list of lists) {
        listsHtml += `<button type="button" onclick="activeList()" class="list-group-item list-group-item-action">${list.name}</button>`;
    };
    listsHtml += '</div>';
    document.getElementById('lists').innerHTML = listsHtml;

}
// function createId() {
//     return Math.random().toString(16).slice(2)
// }
function addList() {
    let newListName = document.getElementById('listName').value;
    let newList = new ToDoList(2, newListName);
    lists.push(newList);
    render();
}

function activeList() {
    event.target.classList.toggle('active');
}

// class for creating new ToDoList
class ToDoList {
    constructor(id, name, toDos = []) {
        this.id = id;
        this.name = name;
        this.toDos = toDos;
    }
    addToDo(toDo) {
        this.toDos.push(toDo);
    }
    removeToDo(id) {
        this.toDos = this.toDos.filter((toDo) => toDo.id != id);
    }
    clearCompleted() {
        this.toDos = this.toDos.filter((toDo) => !toDo.completed);
    }
};
// class for creating new ToDo
class ToDo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }
}
// example of how to create lists
let toDoList = new ToDoList(1, 'Shopping List');
toDoList.addToDo(new ToDo(1, 'bananas'));
toDoList.addToDo(new ToDo(2, 'eggs'));
lists.push(toDoList);


render()