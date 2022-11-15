import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ onClick, completed, content }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {content}
  </li>
)

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
}

export default Task
