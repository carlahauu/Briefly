import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { TestComponent } from "./components/TestComponent";
import Home from "./components/Home";

function App() {
  const [test, setTest] = useState(false);
  function onClick() {
    setTest(!test);
  }
  return (
    <div className="App">
      <Home />
      <button onClick={() => onClick()}>Test</button>
      {test ? <TestComponent /> : <></>}
    </div>
  );
}

export default App;
