import { useDispatch, useSelector } from 'react-redux';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { add, toDoItems } from '../store/ToDoSlice';
import styles from '../styles/MainPage.module.css';

const MainPage = () => {
  const items = useSelector(toDoItems);
  const dispatch = useDispatch();

  return (
    <main
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1 className={styles['page-title']}>What's To-Do?</h1>
      <ToDoForm />
      {items.length ? (
        <ToDoList items={items} />
      ) : (
        <h2>There is nothing due!</h2>
      )}
    </main>
  );
};

export default MainPage;
