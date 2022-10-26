import { ADD_TODO, TOGGLE_TODO } from "../types";

const initialState = [
  {
    id: "0",
    title: "example todo",
    description: "this is an example todo",
    completed: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: String(state.length + 1),
          title: action.payload.title,
          description: action.payload.description,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((t) => {
        if (t.id !== action.payload.id) {
          return t;
        }
        return {
          ...t,
          completed: !t.completed,
        };
      });
    default:
      return state;
  }
};

export default todoReducer;
