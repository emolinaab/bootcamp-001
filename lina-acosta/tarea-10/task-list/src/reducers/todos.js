const todos = (state = [], action) => {
  switch (action.type) {
    case "addTask":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "toggleTask":
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

export default todos;
