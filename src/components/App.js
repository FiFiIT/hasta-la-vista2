import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import SquashPage from "./squash/SquashPage";
import Header from "./common/Header";
import BadmintonPage from "./badminton/BadmintonPage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/squash" component={SquashPage} />
        <Route path="/badminton" component={BadmintonPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
