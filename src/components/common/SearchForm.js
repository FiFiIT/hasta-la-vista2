import React from "react";
import "./SearchForm.css";
import { getCurrentDate } from "../../tools/helpers";
import logo from "../img/hasta-logo.png";

const SearchFrom = ({
  hastaRequest,
  handleOnChange,
  handleOnSubmit,
  title
}) => {
  return (
    <div id="booking" className="section">
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h4>{title}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="booking-form">
                <form onSubmit={handleOnSubmit}>
                  <div className="form-group">
                    <span className="form-label">Kiedy chcesz grać?</span>
                    <input
                      className="form-control"
                      type="date"
                      name="StartDate"
                      defaultValue={getCurrentDate()}
                      onChange={handleOnChange}
                    ></input>
                  </div>
                  <div className="row no-margin">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <span className="form-label">Start</span>
                        <input
                          className="form-control"
                          type="time"
                          name="StartTime"
                          value={hastaRequest.StartTime}
                          onChange={handleOnChange}
                          required
                        />
                      </div>
                      {/* <span className="in-out hidden-xs">&#8652;</span> */}
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <span className="form-label">Koniec</span>
                        <input
                          className="form-control"
                          type="time"
                          name="EndTime"
                          value={hastaRequest.EndTime}
                          onChange={handleOnChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <span className="form-label">Czas</span>
                        <select
                          className="form-control"
                          name="Duration"
                          onChange={handleOnChange}
                        >
                          <option>60 min</option>
                          <option>90 min</option>
                          <option>120 min</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row no-margin">
                    <div className="col-sm-8">
                      <div className="form-group">
                        <span className="form-label">Email:</span>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={handleOnChange}
                          value={hastaRequest.email}
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <span className="form-label">Hasło:</span>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          onChange={handleOnChange}
                          value={hastaRequest.password}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-btn">
                    <button className="submit-btn" onClick={handleOnSubmit}>
                      Szukaj
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row hasta-logo">
                <img src={logo} alt="Hast-La-Vista" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFrom;
