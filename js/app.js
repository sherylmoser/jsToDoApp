const lists = [
    {
        name: "Shopping list",
        todos: [
            {
                text: 'bananas',
                completed: false
            },
            {
                text: '1 lbs ground turkey',
                completed: false
            }
        ]
    },
    {
        name: "Cleaning",
        todos: [
            {
                text: 'vacuum',
                completed: false
            },
            {
                text: 'wash windows',
                completed: false
            }
        ]
    }
]

function render() {
    //left side HTML
    let listsHtml = '<div class="list-group">';
    // iterate through the lists to get their names
    for (let list of lists) {
        listsHtml += `<button type="button" onclick="currentList()"class="list-group-item list-group-item-action">${list.name}</button>`;
    };
    listsHtml += '</div>';
    document.getElementById('lists').innerHTML = listsHtml;

}

render()
function currentList() {

}


//possible constructors for todo app

// class ToDoList
// id: string || number    
// name: String
// toDos: array
// addToDo: fn
// removeToDo: fn
// clearCompleted: fn
/**function ToDoList(id, name, toDos = []) {
    this.id = id;
    this.name = name;
    this.toDos = toDos;
    this.addToDo = (toDo) => {
        this.toDos.push(toDo);
    };
    this.removeToDo = (id) => {
        this.toDos = this.toDos.filter((toDo) => toDo.id != id);
    };
    this.clearCompleted = () => {
        this.toDos = this.toDos.filter((toDo) => !toDo.completed);
    };
}*/
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


// class ToDo
// id: string || number
// text: string
// completed: Boolean
/*function ToDo(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
}*/
class ToDo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }
}