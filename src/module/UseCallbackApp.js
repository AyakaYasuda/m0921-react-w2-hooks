import React, { useState, useCallback, memo } from "react";

const FancyInput = memo(({ name, onChange }) => {
  console.log("Rendering FancyInput");
  return <input type="text" name={name} onChange={onChange} />;
});

const UseCallbackApp = () => {
  const [values, setValues] = useState("");
  const [toggle, setToggle] = useState(false);

  const changeHandler = useCallback(e => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <>
      <h1>useCallback</h1>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <FancyInput name="input" onChange={changeHandler} />
      <button onClick={() => setToggle(prev => !prev)}>
        Toggle: {toggle ? "true" : "false"}
      </button>
    </>
  );
};

export default UseCallbackApp;
