import React, { useState, useEffect } from "react";
import SquashForm from "./SquashForm";
import { connect } from "react-redux";
import * as squashAction from "../../redux/actions/squashActions";
import { newSquashRequest } from "../../tools/mockData";
import { convertInputDate } from "../../tools/helpers";
import "./SquashPage.css";
import SquashSearching from "./SquashSearching";
import SquashList from "./SquashList";

const SquashPage = ({ ...props }) => {
  const [squashRequest, setSquashRequest] = useState(newSquashRequest);

  useEffect(() => {
    if (props.freeCourts && props.squashApi > 0) {
      setTimeout(() => props.searchSquash(squashRequest), 60000);
      console.log(
        new Date().toLocaleTimeString() +
          "> Searching for: " +
          JSON.stringify(squashRequest)
      );
    }
  }, [props.freeCourts]);

  const handleOnSubmit = event => {
    event.preventDefault();
    props.searchSquash(squashRequest);
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
    <>
      {props.squashApi > 0 || props.freeCourts.length > 0 ? (
        <>
          <SquashSearching callInProgress={props.squashApi} />
          <SquashList freeCourts={props.freeCourts} />
        </>
      ) : (
        <SquashForm
          squashRequest={squashRequest}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    freeCourts: state.freeCourts,
    squashApi: state.squashApiCallInProgress
  };
}

const mapDispatchToProps = {
  searchSquash: squashAction.searchSquash
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquashPage);
