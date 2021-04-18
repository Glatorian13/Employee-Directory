import React from "react";
import "./style.css";

export default function Jumbo(props) {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      {props.children}
    </div>
  );
}