import styles from '../styles/ToDoForm.module.css';
import { ToDoForm as ToDoFormProps } from '../types/PropTypes';

const ToDoForm = ({ item, onChange, onSubmit }: ToDoFormProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <section className={styles['form-control']}>
        <label htmlFor="title-input">Title</label>
        <input
          id="title-input"
          type="text"
          placeholder="Buy milk"
          value={item.title}
          onChange={(e) => {
            onChange({ ...item, title: e.target.value });
          }}
          required
        />
      </section>
      <section className={styles['form-control']}>
        <label htmlFor="description-input">Description</label>
        <textarea
          id="description-input"
          placeholder="Add a description"
          rows={2}
          value={item.description}
          onChange={(e) => {
            onChange({ ...item, description: e.target.value });
          }}
        />
      </section>
      <section className={styles['form-control']}>
        <label htmlFor="description-input">Due date</label>
        <input
          id="duedate-input"
          type="date"
          value={item.dateDue}
          onChange={(e) => {
            onChange({ ...item, dateDue: e.target.value });
          }}
        />
      </section>
      <section className={styles['form-control']}>
        <label htmlFor="description-input">Priority</label>
        <select
          id="priority-input"
          value={item.priority}
          onChange={(e) => {
            onChange({ ...item, priority: Number.parseInt(e.target.value) });
          }}
        >
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
      </section>
      <button type="submit" className={styles['form-btn']}>
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
