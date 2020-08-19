import React, { Component, Fragment } from "react";
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import { withRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SupportPage from "./components/SupportContact/SupportPage";
import SteeringCommittee from "./components/SteeringCommittee/SteeringCommittee";
import NewsLetterPage from "./components/NewsLetter/NewsLetterPage";
import SteeringArchive from "./components/SteeringCommittee/SteeringArchive";
import DeadlinesAds from "./components/NewsLetter/DeadlinesAds";
import ContactUs from "./components/SupportContact/ContactUs";
import OurNeighborhood from "./components/About/OurNeighborhood";
import History from "./components/About/History";
import Officers from "./components/About/Officers";
import Bylaws from "./components/About/Bylaws";
import CodeNext from "./components/Info/CodeNext";
import Floodplain from "./components/Info/Floodplain";
import Resources from "./components/Info/Resources";

class App extends Component {
  render() {
    return (
      <div
        className="page-background"
        // style={{ fontFamily: "Roboto, sans-serif !important" }}
      >
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <Switch>
                {/* <Route exact path="/about" component={About} /> */}
                <Route
                  path="/steeringcommittee"
                  component={SteeringCommittee}
                />
                <Route path="/history" component={History} />
                <Route path="/steeringarchive" component={SteeringArchive} />
                <Route path="/recentnews" component={NewsLetterPage} />
                <Route path="/deadline-ads" component={DeadlinesAds} />
                <Route path="/ourneighborhood" component={OurNeighborhood} />
                <Route path="/officers" component={Officers} />
                <Route path="/bylaws" component={Bylaws} />
                <Route path="/codenext" component={CodeNext} />
                <Route path="/floodplain" component={Floodplain} />
                <Route path="/resources" component={Resources} />

                <Route path="/supportpage" component={SupportPage} />
                <Route path="/contactus" component={ContactUs} />

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
