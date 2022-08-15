import { React } from "react";
import "./Result.css";

export default (props) => {
  return (
    <div className="result">
      <p>{props.result}</p>
    </div>
  );
};
