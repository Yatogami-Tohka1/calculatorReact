import "./App.css";
import Buttons from "./components/Buttons.js";
import Result from "./components/Result.js";
import { React, useState } from "react";

function App() {
  let [result, setResult] = useState("0");

  return (
    <div className="App">
      <div className="Calculadora">
        <Result result={result} setresult={setResult} />
        <Buttons result={result} setresult={setResult} />
      </div>
    </div>
  );
}

export default App;
