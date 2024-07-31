import { useRef, useState } from "react";

type UseBooleanReturn = [
  boolean,
  {
    toggle: () => void;
    on: () => void;
    off: () => void;
  }
];

export const useBoolean = (initialValue: boolean): UseBooleanReturn => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useRef({
    toggle: () => setValue((prev) => !prev),
    on: () => setValue(true),
    off: () => setValue(false),
  });

  return [value, updateValue.current];
};
