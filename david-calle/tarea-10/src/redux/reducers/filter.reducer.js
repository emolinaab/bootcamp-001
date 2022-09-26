import { SET_FILTER } from "../types";
import { SHOW_ALL } from "../../utilities/constants";

const initialState = SHOW_ALL;

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter ?? state;
    default:
      return state;
  }
};

export default filterReducer;
