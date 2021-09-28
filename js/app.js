const lists = {
    1: {
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
    2: {
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
}

function render() {
    // this will hold the html that will be displayed in the sidebar
    let listsHtml = '<div class="list-group">';
    // iterate through the lists to get their names
    for (let list of Object.keys(lists)) {
        listsHtml += `<button type="button" class="list-group-item list-group-item-action">${list.name}</button>`;
    };
    listsHtml += '</div>';
    // print out the lists
    document.getElementById('lists').innerHTML = listsHtml;

    // print out the name of the current list
    document.getElementById('currentListTitle').innerText = currentList.name;

    // iterate over the todos in the current list
    let todosHtml = '<ul class="list-group-flush">';
    currentList.todos.forEach((list) => {
        todosHtml += `<li class="list-group-item">${todo.text}</li>`;
    });
    todosHtml += '</ul>';
    // print out the todos
    document.getElementById('currentToDos').innerHTML = todosHtml;
}

render()