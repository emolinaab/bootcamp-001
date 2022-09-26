import React from 'react';
import styles from '../styles/FormBtn.module.css';

type FormBtnProps = {
  label: string;
  formId?: string;
  variant?: string;
};

function FormBtn(props: FormBtnProps) {
  const { label, formId, variant = 'primary' } = props;

  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      type="submit"
      {...(formId ? { form: formId } : {})}
    >
      {label}
    </button>
  );
}

export default FormBtn;
