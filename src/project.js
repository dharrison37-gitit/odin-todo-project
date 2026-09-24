const createProject = (name) => {
  let _name = name;
  let _todos = [];

  const getName = () => _name;

  const getProjectItems = () => _todos;

  const addProjectItem = (obj) => _todos.push(obj);

  const updateProjectItem = (obj) => {
    for (let todo of _todos) {
      let idx = _todos.indexOf(todo);
      console.log(idx);
      if (todo.id === obj.id) {
        _todos[idx] = obj;
      }
    }
  };

  const removeProjectItem = (obj) => {
    _todos = _todos.filter((todo) => todo.id !== obj.getID());
  };

  return { getName, getProjectItems, addProjectItem, updateProjectItem, removeProjectItem };
};

export default createProject;
