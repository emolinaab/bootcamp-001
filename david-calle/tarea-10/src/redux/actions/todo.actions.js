import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "../types";

export const addTodo = (title, description) => {
  return {
    type: ADD_TODO,
    payload: { title, description },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: { filter },
  };
};
