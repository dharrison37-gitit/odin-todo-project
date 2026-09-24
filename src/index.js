import "./styles.css";
import createProject from "./project.js";
import createTodo from "./todo.js";

// create a todo
const one = createTodo("Item one", "This is test one!", "", "medium", "NA");
const two = createTodo("Item two", "This is test two!", "", "low", "NA");

// convert to JSON for storage
const oneJSON = JSON.stringify(one.getTodo(), null, 2);
console.log(oneJSON);
const twoJSON = JSON.stringify(two.getTodo(), null, 2);
console.log(twoJSON);

// create a project
const projOne = createProject("ONE");

console.log(`Project: ${projOne.getName()}`);

projOne.addProjectItem(one.getTodo());
projOne.addProjectItem(two.getTodo());

console.log(projOne.getProjectItems());

projOne.removeProjectItem(two);

console.log(projOne.getProjectItems());
