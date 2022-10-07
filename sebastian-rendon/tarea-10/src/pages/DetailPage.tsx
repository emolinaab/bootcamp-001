import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ToDoItem from '../components/ToDoItem';
import { useAppDispatch } from '../hooks/Redux';
import { completeItem, currentToDoItem } from '../store/ToDoSlice';
import styles from '../styles/DetailPage.module.css';

const DetailPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentItem = useSelector(
    currentToDoItem(Number.parseInt(itemId || ''))
  );

  useEffect(() => {
    if (!currentItem) navigate('/');
  }, []);

  return (
    <main className="main-content">
      <header className={styles['detail-header']}>
        <Link to="/" className={styles['header-back-btn']}>
          Go back
        </Link>{' '}
      </header>
      {currentItem ? (
        <ToDoItem
          isDetail
          item={currentItem}
          onComplete={() => {
            dispatch(completeItem(currentItem.id));
          }}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default DetailPage;
