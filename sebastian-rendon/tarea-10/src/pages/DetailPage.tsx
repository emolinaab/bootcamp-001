import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { currentToDoItem } from '../store/ToDoSlice';

const DetailPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const currentItem = useSelector(
    currentToDoItem(Number.parseInt(itemId || ''))
  );

  useEffect(() => {
    if (!currentItem) navigate('/');
  }, []);

  return (
    <main className="main-content">
      <h1>{currentItem?.title}</h1>
      <div>{itemId}</div>
    </main>
  );
};

export default DetailPage;
