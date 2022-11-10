import { ToDoItemProps } from '../types/PropTypes';
import styles from '../styles/ToDoItem.module.css';
import { useSelector } from 'react-redux';
import { toDoPriorities } from '../store/ToDoSlice';
import { Link } from 'react-router-dom';

const ToDoItem = ({ item, onComplete, isDetail = false }: ToDoItemProps) => {
  const toLocaleDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', {
      timeZone: 'UTC',
      month: 'short',
      day: 'numeric',
      year: '2-digit',
    });

  const priorites = useSelector(toDoPriorities);

  return (
    <section className={styles['item-container']}>
      <div
        className={`${styles['item-header']} ${
          item.completed ? styles['completed'] : ''
        }`}
      >
        <div className={styles['completed-label']}>
          <input
            type="checkbox"
            aria-label="completed"
            checked={item.completed}
            className={styles['completed-checkbox']}
            onChange={(e) => {
              onComplete();
            }}
          />
          {isDetail ? (
            <h3 className={styles['item-title']}>
              {item.id}. {item.title}
            </h3>
          ) : (
            <Link to={`detail/${item.id}`} className={styles['item-title']}>
              {item.title}
            </Link>
          )}
        </div>
        <div className={styles['additional-info']}>
          <small>
            <time dateTime={item.dateDue}>
              Due by {toLocaleDate(item.dateDue)}
            </time>
          </small>
          <small
            className={
              item.priority === 1
                ? styles['priority-low']
                : item.priority === 2
                ? styles['priority-medium']
                : item.priority === 3
                ? styles['priority-high']
                : ''
            }
          >
            {priorites[item.priority] || 'Medium'} priority
          </small>
        </div>
      </div>
      <div
        className={`${styles['item-content']} ${
          item.completed ? styles['completed'] : ''
        }`}
      >
        <p
          className={`${styles['item-description']} ${
            item.description ? '' : styles['empty-description']
          }`}
        >
          {item.description}
        </p>
      </div>
      <footer>
        <time dateTime={item.dateCreated}>
          Created on {toLocaleDate(item.dateCreated)}
        </time>
      </footer>
    </section>
  );
};

export default ToDoItem;
