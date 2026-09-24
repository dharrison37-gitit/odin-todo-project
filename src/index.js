import "./styles.css";
import createProject from "./project.js";
import createTodo from "./todo.js";

// create a todo
const one = createTodo("Item one", "This is test one!", "", "medium", "NA");

// create a project
const projOne = createProject("ONE");

// print the name of project
console.log(`Project: ${projOne.getName()}`);

// add the todo item to the project
projOne.addProjectItem(one.getTodo());

// get all project items
console.log(projOne.getProjectItems());

// udpate the todo item
one.updateTodo({ ...one, description: "What the people" });

// test the mark completed
one.updateCompleted();

// update the todo in project
projOne.updateProjectItem(one.getTodo());

// convert to json string
const oneJSON = JSON.stringify(projOne.getProjectItems(), null, 2);

// display updated information
console.log(oneJSON);

console.log(projOne.getProjectItems());
