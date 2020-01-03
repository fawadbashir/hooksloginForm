import React, { useState } from "react";
import useInput from "./useInput";

const LoginForm = () => {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  const [creds, setCreds] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setCreds([...creds, { email, password }]);
  };

  // console.log(useInput(""));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={setEmail} />
        <input value={password} onChange={setPassword} />
        <button>Submit</button>
      </form>
      <p>{creds.map((cred, index) => `${index + 1} ${cred.email}`)}</p>
    </div>
  );
};

export default LoginForm;
