import { ToDoItem as ToDoItemProps } from '../types/PropTypes';

const ToDoItem = (props: ToDoItemProps) => {
  return <li>{props.id}</li>;
};

export default ToDoItem;
