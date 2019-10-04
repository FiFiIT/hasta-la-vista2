import React, { useState, useEffect } from "react";
import SquashForm from "../common/SearchForm";
import { connect } from "react-redux";
import * as squashAction from "../../redux/actions/squashActions";
import { newSquashRequest } from "../../tools/mockData";
import { squashCourts } from "../../tools/courtsCoordinates";
import "./SquashPage.css";
import SquashList from "../common/HastaCourtsList";
import Searching from "../common/Searching";

const SquashPage = ({ squashApi, freeCourts, searchSquash }) => {
  const [squashRequest, setSquashRequest] = useState(newSquashRequest);

  useEffect(() => {
    if (freeCourts && freeCourts.length === 0 && squashApi > 0) {
      setTimeout(() => searchSquash(squashRequest), 60000);

      console.log(
        new Date().toLocaleTimeString() +
          "> Searching for: " +
          JSON.stringify(squashRequest)
      );
    }
  }, [freeCourts, squashApi, squashRequest, searchSquash]);

  const handleOnSubmit = event => {
    event.preventDefault();

    console.log(JSON.stringify(squashRequest));
    searchSquash(squashRequest);
  };

  const handleOnChange = event => {
    const { name, value } = event.target;

    setSquashRequest(prevRequest => ({
      ...prevRequest,
      [name]: value
    }));
  };

  return (
    <>
      {squashApi || freeCourts.length > 0 ? (
        <>
          <Searching request={squashRequest} show={squashApi} />
          <SquashList freeCourts={freeCourts} rectCourts={squashCourts} />
        </>
      ) : (
        <SquashForm
          squashRequest={squashRequest}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          title="Squash"
        />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    squashApi: state.squashApiCallInProgress,
    freeCourts: state.freeCourts
  };
}

const mapDispatchToProps = {
  searchSquash: squashAction.searchSquash
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquashPage);
