import { ADD_TODO } from "../types";

export const addTodo = (id, title, description) => {
  return {
    type: ADD_TODO,
    payload: { id, title, description },
  };
};
