import { VisibilityFilters } from '../actions/actions'

const filterReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'setVisibilityFilter':
      return action.filter
    default:
      return state
  }
}

export default filterReducer
