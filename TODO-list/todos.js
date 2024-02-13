let input = prompt("What would you like to do?");
let todos = ["buy eggs", "buy bread"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*******");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} : ${todos[i]}`);
    }
    console.log("*******");
  } else if (input === "new") {
    let newTodo = prompt("What is the new todo you want to add?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (input === "delete") {
    let index = parseInt(
      prompt("Ok, Enter the index of the todo you want to delete")
    );
    const deleted = todos.splice(index, 1);
    console.log(`Deleted todo: ${deleted}`);
  }
  input = prompt("What would you like to do?");
}
console.log("You quit the app");
