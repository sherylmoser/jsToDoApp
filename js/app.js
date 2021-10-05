const lists = [];
let activeListId = 0;

function render() {
    //left side HTML
    let listsHtml = '<div class="list-group">';
    // iterate through the lists to get their names
    for (let list of lists) {
        listsHtml += `<button type="button" id="${list.id}" onclick="setActiveList()" class="list-group-item list-group-item-action">${list.name}</button>`;
    };
    listsHtml += '</div>';
    document.getElementById('lists').innerHTML = listsHtml;
    // right side HTML
    let currentListTitle = `${lists[activeListId].name}`;
    document.getElementById('currentListTitle').innerText = currentListTitle;
    // iterate through list to get toDos
    let toDosHTML = '<ul class="list-group list-group-flush">';
    let toDos = lists[activeListId].toDos;
    for (let toDo of toDos) {
        toDosHTML += `<li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" id="${toDo.id}"" onclick="setCompleted()">
        <div class="toDoSpacing">
        ${toDo.text}
        <button class="removeToDo" id="${toDo.id}" onclick="removeThisToDo()"><i class="fas fa-times"></i></button>
        </div>
        </li>`
    };
    toDosHTML += '</ul>';
    document.getElementById('currentToDos').innerHTML = toDosHTML;
    // clearing text input values
    document.getElementById('listName').value = '';
    document.getElementById('addToDoItem').value = '';
}
function createListId() {
    return lists.length;
}
function createToDoId() {
    return (lists[activeListId].toDos.length);
}
function addList() {
    let newListName = document.getElementById('listName').value;
    let newList = new ToDoList(createListId(), newListName);
    lists.push(newList);
    render();
}
function addNewToDo() {
    let newToDoName = document.getElementById('addToDoItem').value;
    let newToDo = new ToDo(createToDoId(), newToDoName);
    let currentList = lists[activeListId];
    currentList.addToDo(newToDo)
    render();
}
function setActiveList() {
    activeListId = event.target.getAttribute('id');
    render();
}
function removeList() {
    lists.splice(activeListId, 1);
    activeListId = 0;
    render();
}
function removeThisToDo() {
    let currentList = lists[activeListId];
    let selectedToDo = event.target.getAttribute('id');
    let removedToDo = currentList.toDos[selectedToDo];
    console.log(removedToDo);
}
function setCompleted() {
    let currentList = lists[activeListId];
    let clickedBox = event.target.getAttribute('id');
    let clickedToDo = currentList.toDos[clickedBox];
    if (clickedToDo.completed == false) {
        clickedToDo.completed = true;
    } else {
        clickedToDo.completed = false;
    }
}
function clearCompletedToDos() {
    let currentList = lists[activeListId];
    currentList.clearCompleted();
    render();
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
let toDoList = new ToDoList(createListId(), 'Shopping List');
toDoList.addToDo(new ToDo(0, 'bananas'));
toDoList.addToDo(new ToDo(1, 'eggs'));
lists.push(toDoList);

let toDoList2 = new ToDoList(createListId(), 'Cleaning');
toDoList2.addToDo(new ToDo(0, 'clean craft room'));
toDoList2.addToDo(new ToDo(1, 'wash windows'));
lists.push(toDoList2);


render()