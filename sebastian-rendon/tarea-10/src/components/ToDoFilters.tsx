import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/Redux';
import {
  filterCompletedFilter,
  filterTitleFilter,
  filterSortBy,
  setTitleFilter,
  setSortBy,
  toggleCompletedFilter,
} from '../store/FilterSlice';
import styles from '../styles/ToDoForm.module.css';

const ToDoFilters = () => {
  const dispatch = useAppDispatch();
  const titleFilter = useSelector(filterTitleFilter);
  const completedFilter = useSelector(filterCompletedFilter);
  const sortBy = useSelector(filterSortBy);

  return (
    <section>
      <section className={styles['form-control']}>
        <label>Filter by name</label>
        <input
          type="text"
          value={titleFilter}
          onChange={(e) => {
            dispatch(setTitleFilter(e.target.value));
          }}
        />
      </section>
      <section className={styles['form-inline-filters']}>
        <section>
          <label>Hide completed</label>
          <input
            type="checkbox"
            aria-label="Hide completed"
            checked={completedFilter}
            onChange={() => {
              dispatch(toggleCompletedFilter());
            }}
          />
        </section>
        <section>
          <label>Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => {
              dispatch(setSortBy(e.target.value));
            }}
          >
            <option value="dateCreated">Creation Date</option>
            <option value="dateDue">Due date</option>
            <option value="priority">Priority</option>
          </select>
        </section>
      </section>
    </section>
  );
};

export default ToDoFilters;
