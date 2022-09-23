import { combineReducers } from "redux";
import todoReducer from "./todo.reducer";

const mainReducer = combineReducers({
  todos: todoReducer,
});

export default mainReducer;
