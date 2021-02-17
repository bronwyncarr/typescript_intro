// function showTodo(todo: {title: string, text: string}) {
//     console.log(`${todo.title} ${todo.text}`)
// }

// let myTodo = {title: 'Walk', text: 'Take Ivy for a walk before work'}

// showTodo(myTodo)

// To clean up ... use interface

interface Todo{
    title: string;
    text: string;
}

function showTodo(todo: Todo) {
    console.log(todo.title+': '+todo.text)
}

let myTodo = {title: 'Cats', text: 'Feed Winter some tuna.'}

showTodo(myTodo)