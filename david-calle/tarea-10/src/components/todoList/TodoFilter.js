import React from "react";
import { useDispatch } from "react-redux";
import {
  SHOW_ALL,
  SHOW_PENDING,
  SHOW_COMPLETED,
} from "../../utilities/constants";
import { setFilter } from "../../redux/actions/todo.actions";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const updateFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <section>
      <button onClick={() => updateFilter(SHOW_ALL)}> All</button>
      <button onClick={() => updateFilter(SHOW_PENDING)}> Pending</button>
      <button onClick={() => updateFilter(SHOW_COMPLETED)}> Completed</button>
    </section>
  );
};

export default TodoFilter;
