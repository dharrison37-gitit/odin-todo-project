const createProject = (name) => {
  let _name = name;
  let _todos = [];

  const getName = () => _name;

  const getProjectItems = () => _todos;

  const addProjectItem = (obj) => _todos.push(obj);

  const removeProjectItem = (obj) => {
    _todos = _todos.filter((todo) => todo.id !== obj.getID());
  };

  return { getName, getProjectItems, addProjectItem, removeProjectItem };
};

export default createProject;
