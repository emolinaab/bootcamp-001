import React from 'react';
import styles from '../styles/FormField.module.css';

type FormFieldProps = {
  label: string;
  inputId: string;
  inputType: string;
  value: string;
  onChange: Function;
};

function FormField(props: FormFieldProps) {
  const { label, inputId, value, onChange, inputType = 'text' } = props;
  return (
    <section className={styles['form-control']}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        type={inputType}
        value={value}
        className={styles.input}
        onChange={(e) => onChange(e)}
      />
    </section>
  );
}

export default FormField;
