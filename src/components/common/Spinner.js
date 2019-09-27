import React from "react";
import "./Spinner.css";

const Spinner = ({ text }) => {
  return <div className="loader">{text}</div>;
};

export default Spinner;
