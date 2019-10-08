import React, { useState, useEffect } from "react";
import SquashForm from "../common/SearchForm";
import { connect } from "react-redux";
import * as squashAction from "../../redux/actions/squashActions";
import * as apiAction from "../../redux/actions/apiStatusActions";
import { newSquashRequest } from "../../tools/mockData";
import { squashCourts } from "../../tools/courtsCoordinates";
import "./SquashPage.css";
import SquashList from "../common/HastaCourtsList";
import Searching from "../common/Searching";
import { getCurrentDate } from "../../tools/helpers";

const SquashPage = ({ squashApi, freeCourts, searchSquash, stopApiCall }) => {
  const [squashRequest, setSquashRequest] = useState(newSquashRequest);

  useEffect(() => {
    if (freeCourts && freeCourts.length === 0 && squashApi > 0) {
      const teraz = new Date();
      teraz.setMinutes(teraz.getMinutes() + 20);
      const szukam = new Date(squashRequest.StartDate);
      szukam.setHours(squashRequest.StartTime.substr(0, 2));
      szukam.setMinutes(squashRequest.StartTime.substr(3, 4));

      if (teraz < szukam) {
        setTimeout(() => searchSquash(squashRequest), 60000);
      } else {
        stopApiCall();
      }

      // console.log(
      //   new Date().toLocaleTimeString() +
      //     "> Searching for: " +
      //     JSON.stringify(squashRequest)
      // );
    }
  }, [freeCourts, squashApi, squashRequest, searchSquash]);

  const handleOnSubmit = event => {
    event.preventDefault();

    //console.log(JSON.stringify(squashRequest));
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
          hastaRequest={squashRequest}
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
  searchSquash: squashAction.searchSquash,
  stopApiCall: apiAction.stopApiCall
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquashPage);
