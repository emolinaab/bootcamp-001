import { combineReducers } from "redux";
import todoReducer from "./todo.reducer";
import filterReducer from "./filter.reducer";

const mainReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default mainReducer;
