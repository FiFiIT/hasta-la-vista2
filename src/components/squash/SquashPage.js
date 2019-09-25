import React, { useState } from "react";
import SquashForm from "./SquashForm";
import { connect } from "react-redux";
import * as squashAction from "../../redux/actions/squashActions";
import { newSquashRequest } from "../../tools/mockData";
import { convertInputDate } from "../../tools/helpers";
import "./SquashPage.css";

const SquashPage = ({ dispatch, ...props }) => {
  const [squashRequest, setSquashRequest] = useState(newSquashRequest);

  const handleOnSubmit = event => {
    event.preventDefault();
    dispatch(squashAction.search(squashRequest));
  };

  const handleOnChange = event => {
    const { name, value } = event.target;
    setSquashRequest(prevRequest => ({
      ...prevRequest,
      [name]: convertDatePart(name, value)
    }));
  };

  function convertDatePart(name, value) {
    switch (name) {
      case "StartDate":
        return convertInputDate(value);
      case "Duration":
        return parseInt(value);
      default:
        return value;
    }
  }

  return (
    <div className="bookingSquash">
      <SquashForm
        squashRequest={squashRequest}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    hasta: state.hastaSquashResponse
  };
}
export default connect(mapStateToProps)(SquashPage);
