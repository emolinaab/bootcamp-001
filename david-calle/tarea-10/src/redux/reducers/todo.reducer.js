import { ADD_TODO } from "../types";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export default todoReducer;
