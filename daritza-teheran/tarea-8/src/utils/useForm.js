import { useState } from "react";

const useForm = (initialForm = {email:'', password:''}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { type, value } = target;
    setFormState({
      ...formState,
      [type]: value,
    });
  };

  const resetSignIn = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    resetSignIn
  };
};

export default useForm;
