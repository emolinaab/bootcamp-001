import React from 'react';

type FormContainerProps = {
  children: JSX.Element | JSX.Element[];
  onSubmit: Function;
};

function FormContainer(props: FormContainerProps) {
  const { children, onSubmit } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
}

export default FormContainer;
