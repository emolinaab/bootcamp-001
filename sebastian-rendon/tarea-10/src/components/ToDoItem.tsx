import { ToDoItemProps } from '../types/PropTypes';
import styles from '../styles/ToDoItem.module.css';
import { useSelector } from 'react-redux';
import { toDoPriorities } from '../store/ToDoSlice';
import { Link } from 'react-router-dom';

const ToDoItem = ({ item, onComplete }: ToDoItemProps) => {
  const localeDate = new Date(item.dateDue).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'short',
    day: 'numeric',
    year: '2-digit',
  });

  const priorites = useSelector(toDoPriorities);

  return (
    <section
      className={`${styles['item-container']} ${
        item.completed ? styles['completed'] : ''
      }`}
    >
      <div className={styles['item-header']}>
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
          <Link to={`detail/${item.id}`} className={styles['item-title']}>
            {item.title}
          </Link>
        </div>
        <div className={styles['additional-info']}>
          <small>
            <time dateTime={item.dateDue}>Due by {localeDate}</time>
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
      <div className={styles['item-content']}>
        <p
          className={`${styles['item-description']} ${
            item.description ? '' : styles['empty-description']
          }`}
        >
          {item.description}
        </p>
      </div>
    </section>
  );
};

export default ToDoItem;
