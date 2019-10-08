import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import BadmintonForm from "../common/SearchForm";
import { newBadmintonRequest } from "../../tools/mockData";
import { badmintonCourts } from "../../tools/courtsCoordinates";
import { convertDatePart } from "../../tools/helpers";
import Searching from "../common/Searching";
import * as badmintonActions from "../../redux/actions/badmintonActions";
import BadmintonList from "../common/HastaCourtsList";

const BadmintonPage = ({ hastaApi, foundCourts, searchBadminton }) => {
  const [badmintonRequest, setBadmintonRequest] = useState(newBadmintonRequest);

  useEffect(() => {
    if (foundCourts && foundCourts.length === 0 && hastaApi > 0) {
      setTimeout(() => searchBadminton(badmintonRequest), 60000);

      console.log(
        new Date().toLocaleTimeString() +
          "> Searching for: " +
          JSON.stringify(badmintonRequest)
      );
    }
  }, [foundCourts, badmintonRequest, hastaApi, searchBadminton]);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setBadmintonRequest(prevRequest => ({
      ...prevRequest,
      [name]: convertDatePart(name, value)
    }));
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    console.log(JSON.stringify(badmintonRequest));
    searchBadminton(badmintonRequest);
  };

  return (
    <>
      {hastaApi || foundCourts.length > 0 ? (
        <>
          <Searching request={badmintonRequest} show={hastaApi} />
          <BadmintonList
            freeCourts={foundCourts}
            rectCourts={badmintonCourts}
          />
        </>
      ) : (
        <BadmintonForm
          hastaRequest={badmintonRequest}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          title="Badminton"
        />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    hastaApi: state.squashApiCallInProgress,
    foundCourts: state.foundCourts
  };
}

const mapDispatchToProps = {
  searchBadminton: badmintonActions.searchBadminton
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BadmintonPage);
