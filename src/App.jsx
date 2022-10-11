import React, { Component, Fragment } from "react";
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import { withRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import JoinPage from "./components/SupportContact/JoinPage";
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
import BNACalendar from "./components/NewsLetter/BNACalendar";
import SteeringForm from "./components/SteeringCommittee/SteeringForm";
import LoginPage from "./components/LoginPage";

class App extends Component {
  render() {
    return (
      <div
        className="page-background"
        // style={{ fontFamily: "Roboto, sans-serif !important" }}
      >
        <Navbar />
        <Fragment>
          <Switch>
            {/* <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            > */}
            <Route exact path="/" component={HomePage} />
            <Route path="/steeringcommittee" component={SteeringCommittee} />
            <Route exact path="/meeting/:id" component={SteeringForm} />
            <Route exact path="/newmeeting" component={SteeringForm} />
            <Route path="/history" component={History} />
            <Route path="/steeringarchive" component={SteeringArchive} />
            <Route path="/recentnews" component={NewsLetterPage} />
            <Route path="/deadline-ads" component={DeadlinesAds} />
            <Route path="/ourneighborhood" component={OurNeighborhood} />
            <Route path="/officers" component={Officers} />
            <Route path="/bylaws" component={Bylaws} />
            <Route path="/calendar" component={BNACalendar} />
            <Route path="/codenext" component={CodeNext} />
            <Route path="/floodplain" component={Floodplain} />
            <Route path="/resources" component={Resources} />
            <Route path="/joinpage" component={JoinPage} />
            <Route path="/contactus" component={ContactUs} />
            <Route exact path="/login" component={LoginPage} />
            {/* </AnimatedSwitch> */}

            {/* <Route component={"NotFound"} /> */}
          </Switch>
        </Fragment>
      </div>
    );
  }
}

export default withRouter(App);
