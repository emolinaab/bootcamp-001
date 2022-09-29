import React from 'react';
import styles from '../styles/FormBtn.module.css';

type FormBtnProps = {
  label: string;
  formId?: string;
};

function FormBtn(props: FormBtnProps) {
  const { label, formId } = props;

  return (
    <button
      className={`${styles.btn} ${styles.primary}`}
      type="submit"
      {...(formId ? { form: formId } : {})}
    >
      {label}
    </button>
  );
}

export default FormBtn;
