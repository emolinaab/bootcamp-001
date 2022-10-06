import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { useAppDispatch, useAppSelector } from '../hooks/Redux';
import {
  addItem,
  toDoItems,
  newToDoItem,
  setNewItem,
} from '../store/ToDoSlice';
import styles from '../styles/MainPage.module.css';
import { ToDoItem } from '../types/PropTypes';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const newItem = useAppSelector(newToDoItem);
  const items = useAppSelector(toDoItems);

  return (
    <main className="main-content">
      <h1 className={styles['page-title']}>What's To-Do?</h1>
      <ToDoForm
        item={newItem}
        onChange={(formItem: ToDoItem) => {
          dispatch(setNewItem(formItem));
        }}
        onSubmit={() => {
          dispatch(addItem(newItem));
        }}
      />
      {items.length ? <ToDoList items={items} /> : <h2>Nothing due!</h2>}
    </main>
  );
};

export default MainPage;
