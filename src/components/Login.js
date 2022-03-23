import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter username"
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
