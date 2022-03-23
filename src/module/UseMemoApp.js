import React, { useState, useMemo } from "react";

const fibonacci = num =>
  num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
  
const Fibo = ({ value }) => {
  const result = useMemo(() => fibonacci(value), [value]);
  return (
    <p>
      {value}:{result}
    </p>
  );
};

const UseMemoApp = () => {
  const [values, setValues] = useState([]);

  const keyUpHandler = e => {
    const {
      key,
      target: { value },
    } = e;
    console.log(key, value);

    if (key === "Enter") {
      if (value > 40 || value < 1) return alert("Invalid Input");
    }

    setValues(prev => prev.concat(value));
  };

  console.log(values);
  return (
    <>
      <h1>useMemo</h1>
      <input type="number" min={1} max={40} onKeyUp={keyUpHandler} />
      {values.map((val, index) => (
        <Fibo value={val} key={index} />
      ))}
    </>
  );
};

export default UseMemoApp;
