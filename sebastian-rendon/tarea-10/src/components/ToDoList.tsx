import { ToDoList as ToDoListProps } from '../types/PropTypes';
import ToDoItem from './ToDoItem';

const ToDoList = ({ items }: ToDoListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <ToDoItem {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default ToDoList;
