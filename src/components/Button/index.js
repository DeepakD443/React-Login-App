import React from "react";
import "./styles.css";

function Button(props) {
  return <button onClick={props.onClick}>Submit</button>;
}

export default Button;
