import { useCallback, useState } from 'react';

function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({});

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());
  }

  const resetForm = useCallback(
    (updateValues = {}, updateErrors = {}, updateIsValid = false) => {
      setValues(updateValues);
      setErrors(updateErrors);
      setIsValid(updateIsValid);
    },
    [setValues, setErrors, setIsValid]
  );
  return { values, setValues, errors, isValid, handleChange, resetForm };
}

export default useFormWithValidation;
