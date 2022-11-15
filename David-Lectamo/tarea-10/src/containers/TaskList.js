import { connect } from 'react-redux'
import { toggleTodo } from '../actions/actions'
import TaskList from '../components/TaskList'
import { VisibilityFilters } from '../actions/actions'

const getVisibleTodos = (taskReducer, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return taskReducer
    case VisibilityFilters.SHOW_COMPLETED:
      return taskReducer.filter(tmp => tmp.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return taskReducer.filter(tmp => !tmp.completed)
    default:
      return taskReducer
  }
}

const mapStateToProps = state => ({
  taskReducer: getVisibleTodos(state.taskReducer, state.filterReducer)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect( mapStateToProps, mapDispatchToProps )(TaskList)
