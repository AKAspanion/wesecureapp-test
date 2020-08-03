import { useState, useEffect, useRef, useCallback } from "react";

export default function useForm(initial, rules, onSubmit) {
  const [values, setValues] = useState(initial || {});
  const [errors, setErrors] = useState({});

  const formRendered = useRef(true);

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initial);
    }
    formRendered.current = false;
  }, []);

  const handleBlur = useCallback((event) => {
    if (!event) return;

    const { target } = event;
    const { name } = target;

    let invalid = false;
    const errFunction = rules[name];
    if (errFunction) {
      const errorFound = errFunction(values[name]);
      invalid = errorFound === true ? false : errorFound;
    }
    setErrors({ ...errors, [name]: invalid });
  });

  const handleChange = useCallback((event) => {
    if (!event) return;

    const { target, selectedItem } = event;
    if (target) {
      const { name, value } = target;
      setValues({ ...values, [name]: value });
    }
    if (selectedItem) {
      setValues({ ...values, gender: selectedItem });
    }
  });

  const handleSubmit = useCallback((event) => {
    if (!event) return;

    event.preventDefault();

    onSubmit({ values, errors });
  });

  return [values, errors, handleBlur, handleChange, handleSubmit];
}
