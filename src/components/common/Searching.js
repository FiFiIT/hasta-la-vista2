import React from "react";
import { Dot } from "react-animated-dots";

const Searching = ({ request, show }) => {
  const text =
    "Szukam wolnych kortów na " +
    request.StartDate +
    " miedzy " +
    request.StartTime +
    " a " +
    request.EndTime;

  return (
    <div className="container">
      <h4>
        {text}
        {show === true && (
          <>
            <Dot>.</Dot>
            <Dot>.</Dot>
            <Dot>.</Dot>
          </>
        )}
      </h4>
    </div>
  );
};

export default Searching;
