import React, { createRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addMeetingToFirestore,
  listenToMeetingFromFirestore,
  updateMeetingInFirestore,
} from "../../common/firestore/firestoreService";
import useFirestoreDoc from "../../common/firestore/useFirestoreDoc";
import { listenToSteering } from "./redux/SteeringActions";
import firebase from "../../common/config/firebase";

const SteeringForm = ({ history, match }) => {
  const [startDate, setStartDate] = useState();
  const dispatch = useDispatch();

  useFirestoreDoc({
    query: () => listenToMeetingFromFirestore(match.params.id),
    data: (meeting) => dispatch(listenToSteering([meeting])),
    deps: [match.params.id],
  });

  let meeting = useSelector((state) => state.steering.steering);

  if (match.path === "/newmeeting") {
    meeting = [
      {
        title: "",
        New: "",
        Old: "",
        Passcode: "",
        Reports: "",
        ZoomID: "",
      },
    ];
  }

  const updatedMeeting = {};
  const meetingId = createRef();
  const passcode = createRef();
  const oldB = createRef();
  const newB = createRef();
  const reportsRef = createRef();
  const titleRef = createRef();

  const updateForm = (e) => {
    setStartDate(meeting[0].date || Date.now());
    e.preventDefault();
    updatedMeeting.date = firebase.firestore.Timestamp.fromDate(
      startDate || meeting[0].date
    );
    updatedMeeting.title = titleRef.current.value;
    updatedMeeting.ZoomID = meetingId.current.value;
    updatedMeeting.Passcode = passcode.current.value;
    updatedMeeting.Old = oldB.current.value.split(", ");
    updatedMeeting.New = newB.current.value.split(", ");
    updatedMeeting.Reports = reportsRef.current.value.split(", ");

    if (match.path === "/newmeeting") {
      addMeetingToFirestore(updatedMeeting);
    } else {
      updatedMeeting.id = meeting[0].id;
      updateMeetingInFirestore(updatedMeeting);
    }
    history.push("/steeringcommittee");
  };

  let oldItems;
  let newItems;
  let reports;
  if (meeting && meeting[0] && meeting[0].Old.length > 0) {
    oldItems = meeting[0].Old.join(", ");
    newItems = meeting[0].New.join(", ");
    reports = meeting[0].Reports.join(", ");
  }

  if (!meeting) {
    return null;
  }

  return (
    <div key={meeting[0] ? meeting[0].id : null} className="container">
      <div className="elements">
        <h1>{meeting[0] ? "Update Meeting" : "Create Meeting"}</h1>
        <hr className="solid"></hr>
        <div></div>
        <form
          onSubmit={(e) => {
            updateForm(e);
          }}
        >
          <div className="form-group">
            <label>Title</label>
            <input
              ref={titleRef}
              className="form-control"
              placeholder="Enter Meeting Title..."
              defaultValue={meeting && meeting[0] ? meeting[0].title : ""}
            />
          </div>
          <div className="form-group">
            <label>Zoom Meeting ID</label>
            <input
              ref={meetingId}
              className="form-control"
              placeholder="Enter Meeting ID"
              defaultValue={meeting && meeting[0] ? meeting[0].ZoomID : ""}
            />
            <small className="form-text text-muted">
              Please provide in the form of: 865 1894 9532
            </small>
          </div>
          <div className="form-group">
            <label>Passcode</label>
            <input
              ref={passcode}
              className="form-control"
              placeholder="Passcode here..."
              defaultValue={meeting && meeting[0] ? meeting[0].Passcode : ""}
            />
          </div>
          <div className="form-group">
            <label>Old Business</label>
            <input
              ref={oldB}
              className="form-control"
              placeholder="Old Business here..."
              defaultValue={meeting && meeting[0] && oldItems}
            />
            <small className="form-text text-muted">
              Please separate items with a comma
            </small>
          </div>
          <div className="form-group">
            <label>New Business</label>
            <input
              ref={newB}
              className="form-control"
              placeholder="New Business here..."
              defaultValue={meeting && meeting[0] && newItems}
            />{" "}
            <small className="form-text text-muted">
              Please separate items with a comma
            </small>
          </div>
          <div className="form-group">
            <label>Committee Reports</label>
            <input
              ref={reportsRef}
              className="form-control"
              placeholder="Reports Here..."
              defaultValue={meeting && meeting[0] && reports}
            />
            <small className="form-text text-muted">
              Please separate items with a comma
            </small>
          </div>
          <div className="form-group">
            <label>Date</label>
            <br />
            {meeting && meeting[0] ? (
              <DatePicker
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeSelect
                selected={startDate || meeting[0].date}
                onChange={(date) => setStartDate(date)}
              />
            ) : (
              <DatePicker
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeSelect
                selected={startDate || Date.now()}
                onChange={(date) => setStartDate(date)}
              />
            )}
          </div>
          <button className="btn btn-primary">Submit</button>
          <Link
            to="/steeringcommittee"
            type="submit"
            className="btn btn-secondary"
          >
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SteeringForm;
