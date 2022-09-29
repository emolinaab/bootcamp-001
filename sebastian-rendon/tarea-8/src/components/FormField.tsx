import React from 'react';
import styles from '../styles/FormField.module.css';

type FormFieldProps = {
  label: string;
  inputId: string;
  placeholder?: string;
  inputType?: string;
  register?: Function;
  errorMessage?: string;
};

function FormField(props: FormFieldProps) {
  const {
    label,
    inputId,
    placeholder = '',
    inputType = 'text',
    register = () => {},
    errorMessage = undefined,
  } = props;
  return (
    <section className={styles['form-control']}>
      <label id={`${inputId}-label`} htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        id={inputId}
        type={inputType}
        aria-labelledby={`${inputId}-label`}
        placeholder={placeholder}
        className={styles.input}
        data-testid={inputId}
        {...register()}
      />
      <small className={styles['error-message']}>{errorMessage || ''}</small>
    </section>
  );
}

export default FormField;
