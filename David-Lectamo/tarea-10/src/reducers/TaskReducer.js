const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'addTask':
      return [ ...state, {
          id: action.id,
          content: action.content,
          completed: false
        }
      ]
    case 'toggleTask':
      return state.map(task =>
        (task.id === action.id) ? {...task, completed: !task.completed} : task )
    default:
      return state
  }
}

export default taskReducer
