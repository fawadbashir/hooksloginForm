import { useState } from "react";

const useInput = (initialValue = "") => {
  const [input, setInput] = useState(initialValue);

  const Input = e => {
    return setInput(e.target.value);
  };

  return [input, Input];
};

export default useInput;
