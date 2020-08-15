import React, { Component, Fragment } from "react";
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import { withRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SupportPage from "./components/Supportpage/SupportPage";
import SteeringCommittee from "./components/SteeringCommittee/SteeringCommittee";
import NewsArchivePage from "./components/NewsLetter/NewsArchivePage";
import NewsLetterPage from "./components/NewsLetter/NewsLetterPage";
import SteeringArchive from "./components/SteeringCommittee/SteeringArchive";

class App extends Component {
  render() {
    return (
      <div style={{ fontFamily: "Roboto, sans-serif !important" }}>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <Switch>
                {/* <Route exact path="/about" component={About} /> */}
                <Route path="/supportpage" component={SupportPage} />
                <Route
                  path="/steeringcommittee"
                  component={SteeringCommittee}
                />
                <Route path="/steeringarchive" component={SteeringArchive} />
                <Route path="/recentnews" component={NewsLetterPage} />
                <Route path="/newsarchive" component={NewsArchivePage} />
                {/* <Route component={"NotFound"} /> */}
              </Switch>
            </Fragment>
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
