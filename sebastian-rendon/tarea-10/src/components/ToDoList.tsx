import { useDispatch } from 'react-redux';
import { completeItem } from '../store/ToDoSlice';
import { ToDoListProps } from '../types/PropTypes';
import ToDoItem from './ToDoItem';
import styles from '../styles/ToDoList.module.css';

const ToDoList = ({ items }: ToDoListProps) => {
  const dispatch = useDispatch();

  return (
    <section className={styles['item-list']}>
      {items.map((item, i) => (
        <ToDoItem
          key={item.id}
          item={item}
          onComplete={() => {
            dispatch(completeItem(item.id));
          }}
        />
      ))}
    </section>
  );
};

export default ToDoList;
