import React from 'react';

type FormContainerProps = {
  className?: string;
  children?: JSX.Element | JSX.Element[];
  onSubmit?: Function;
};

function FormContainer(props: FormContainerProps) {
  const { className, children, onSubmit } = props;

  return (
    <form
      className={className}
      data-testid="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit();
      }}
    >
      {children}
    </form>
  );
}

export default FormContainer;
