import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ dispatch }) => {
  const title = "<Todo List App>";
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = "";
  };

  return (
    <form className="add-container" onSubmit={handleSubmit}>
      <h1 className="add-container__title">{title}</h1>
      <fieldset className="add-container__content">
        <input placeholder="Add any task" ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </fieldset>
    </form>
  );
};

export default connect()(AddTodo);
