import { combineReducers } from 'redux'
import taskReducer from './TaskReducer'
import filterReducer from './FilterReducer'

export default combineReducers({ taskReducer, filterReducer })
