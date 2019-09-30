import React, { useState } from "react";
import { connect } from "react-redux";
import BadmintonForm from "../common/SearchForm";
import { newSquashRequest } from "../../tools/mockData";
import { badmintonCourts } from "../../tools/courtsCoordinates";
import { convertDatePart } from "../../tools/helpers";
import Searching from "../common/Searching";
import * as badmintonActions from "../../redux/actions/badmintonActions";
import BadmintonList from "../common/HastaCourtsList";

const BadmintonPage = ({ hastaApi, freeCourts, searchBadminton }) => {
  const [badmintonRequest, setBadmintonRequest] = useState(newSquashRequest);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setBadmintonRequest(prevRequest => ({
      ...prevRequest,
      [name]: convertDatePart(name, value)
    }));
  };

  const handleOnSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      {hastaApi || freeCourts.length > 0 ? (
        <>
          <Searching request={badmintonRequest} show={hastaApi} />
          <BadmintonList freeCourts={freeCourts} rectCourts={badmintonCourts} />
        </>
      ) : (
        <BadmintonForm
          squashRequest={badmintonRequest}
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
    freeCourts: state.freeCourts
  };
}

const mapDispatchToProps = {
  searchBadminton: badmintonActions.searchBadminton
};

export default connect(mapStateToProps)(BadmintonPage);
