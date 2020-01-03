import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <h2>Start editing to dfdsdsdsee some magic happen!</h2> */}
      <LoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
