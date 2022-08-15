import { React } from "react";
import "./Buttons.css";

export default (props) => {
  function increaseValue(value) {
    if (props.result == "0") {
      props.setresult(value);
    } else {
      props.setresult(props.result + value);
    }
  }
  function resolve() {
    props.setresult(eval(props.result));
  }
  return (
    <div className="buttons">
      <div className="Operations">
        <button className="Operation" onClick={() => props.setresult("0")}>
          <span>C</span>
        </button>
        <button className="Operation">
          <span>?</span>
        </button>
        <button className="Operation" onClick={() => increaseValue("%")}>
          <span>%</span>
        </button>
        <button className="Operation" onClick={() => increaseValue("/")}>
          <span>/</span>
        </button>
      </div>
      <div className="1-3">
        <button className="Number" onClick={() => increaseValue("9")}>
          9
        </button>
        <button className="Number" onClick={() => increaseValue("8")}>
          8
        </button>
        <button className="Number" onClick={() => increaseValue("7")}>
          7
        </button>
        <button className="Operation" onClick={() => increaseValue("*")}>
          <span>X</span>
        </button>
      </div>
      <div className="4-6">
        <button className="Number" onClick={() => increaseValue("6")}>
          6
        </button>
        <button className="Number" onClick={() => increaseValue("5")}>
          5
        </button>
        <button className="Number" onClick={() => increaseValue("4")}>
          4
        </button>
        <button className="Operation" onClick={() => increaseValue("-")}>
          <span>-</span>
        </button>
      </div>
      <div className="7-9">
        <button className="Number" onClick={() => increaseValue("3")}>
          3
        </button>
        <button className="Number" onClick={() => increaseValue("2")}>
          2
        </button>
        <button className="Number" onClick={() => increaseValue("1")}>
          1
        </button>
        <button className="Operation" onClick={() => increaseValue("+")}>
          <span>+</span>
        </button>
      </div>
      <div className="footer">
        <button className="Number" onClick={() => increaseValue("0")}>
          0
        </button>
        <button className="Number" onClick={() => increaseValue(".")}>
          .
        </button>
        <button className="Resolve" onClick={() => resolve()}>
          =
        </button>
      </div>
    </div>
  );
};
