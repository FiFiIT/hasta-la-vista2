import React from "react";
import Spinner from "../common/Spinner";

const SquashSearching = ({ callInProgress }) => {
  return <>{callInProgress > 0 && <Spinner text="Szukam wolnych kortów" />}</>;
};

export default SquashSearching;
