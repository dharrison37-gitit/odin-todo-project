const createTodo = (title, description, dueDate, priority, notes) => {
  let _id = crypto.randomUUID();
  let _title = title;
  let _description = description;
  let _dueDate = dueDate || new Date().toLocaleDateString();
  let _priority = priority || "low";
  let _notes = notes;
  let _isComplete = false;

  const getTodo = () => ({
    id: _id,
    title: _title,
    description: _description,
    dueDate: _dueDate,
    priority: _priority,
    notes: _notes,
    completed: _isComplete,
  });

  const getID = () => _id;

  const updateTodo = (obj) => {
    if (obj.title) _title = obj.title;
    if (obj.description) _description = obj.description;
    if (obj.dueDate) _dueDate = obj.dueDate;
    if (obj.priority) _priority = obj.priority;
    if (obj.snotes) _notes = obj.notes;
  };

  const updateCompleted = () => {
    _isComplete = !_isComplete;
    return _isComplete;
  };

  return { getTodo, updateTodo, updateCompleted, getID };
};

export default createTodo;
