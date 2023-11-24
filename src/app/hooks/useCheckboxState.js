import { useCallback, useState } from "react";

export const useCheckboxState = (initialOptions) => {
  const [options, setOptions] = useState(initialOptions);

  const setOptionChecked = useCallback((id, checked) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, checked } : option
      )
    );
  }, []);

  return [options, setOptionChecked];
};
