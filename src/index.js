import "./styles.css";
import createTodo from "./todo.js";

const one = createTodo("new item", "This is a test!", "", "medium", "NA");

console.log(JSON.stringify(one.getTodo(), null, 2));
