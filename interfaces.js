// function showTodo(todo: {title: string, text: string}) {
//     console.log(`${todo.title} ${todo.text}`)
// }
function showTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
var myTodo = { title: 'Cats', text: 'Feed Winter some tuna.' };
showTodo(myTodo);
