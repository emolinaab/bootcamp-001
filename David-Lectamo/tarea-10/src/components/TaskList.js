import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = ({ taskReducer, toggleTodo }) => (
  <ul>
    {taskReducer.map(task =>
      <Task
        key={task.id}
        {...task}
        onClick={() => toggleTodo(task.id)}
      />
    )}
  </ul>
)

TaskList.propTypes = {
  taskReducer: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TaskList
