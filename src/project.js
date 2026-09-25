const createProject = (name) => {
  let _id = crypto.randomUUID();
  let _name = name;
  let _todos = [];

  const getID = () => _id;

  const getName = () => _name;

  const getTodos = () => _todos;

  const addTodo = (obj) => _todos.push(obj);

  const updateItem = (obj) => {
    for (let todo of _todos) {
      let idx = _todos.indexOf(todo);
      console.log(idx);
      if (todo.id === obj.id) {
        _todos[idx] = obj;
      }
    }
  };

  const removeItem = (obj) => {
    _todos = _todos.filter((todo) => todo.id !== obj.getID());
  };

  return { getID, getName, getTodos, addTodo, updateItem, removeItem };
};

export default createProject;
