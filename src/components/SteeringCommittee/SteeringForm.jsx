import React, { createRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listenToMeetingFromFirestore } from "../../common/firestore/firestoreService";
import useFirestoreDoc from "../../common/firestore/useFirestoreDoc";
import { listenToSteering } from "./redux/SteeringActions";

const SteeringForm = ({ match }) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  useFirestoreDoc({
    query: () => listenToMeetingFromFirestore(match.params.id),
    data: (meeting) => dispatch(listenToSteering([meeting])),
    deps: [match.params.id],
  });
  const meeting = useSelector((state) => state.steering.steering);

  if (!meeting) {
    return null;
  }

  console.log(meeting[0]);

  let initialValues = meeting[0] ?? {
    title: "",
    date: new Date(),
    Reports: [],
    New: [],
    Old: [],
    Passcode: "",
    ZoomID: "",
  };

  const meetingId = createRef();
  const passcode = createRef();
  const oldB = createRef();
  const newB = createRef();
  const reportsRef = createRef();

  console.log(initialValues);

  const updateForm = (e) => {
    e.preventDefault();
    console.log(meetingId.current.value);
  };

  const oldItems = meeting[0].Old.join(", ");
  const newItems = meeting[0].New.join(", ");
  const reports = meeting[0].Reports.join(", ");
  return (
    <div className="container">
      <div className="elements">
        <h1>Form</h1>
        <hr className="solid"></hr>
        <div></div>
        <form
          onSubmit={(e) => {
            updateForm(e);
          }}
        >
          <div className="form-group">
            <label>Zoom Meeting ID</label>
            <input
              ref={meetingId}
              className="form-control"
              initialvalues="test"
              placeholder="Enter Meeting ID"
              defaultValue={"" || meeting[0].ZoomID}
            />
            <small className="form-text text-muted">
              Please provide in the form of: 865 1894 9532
            </small>
          </div>
          <div className="form-group">
            <label>Passcode</label>
            <input
              className="form-control"
              placeholder="Passcode here..."
              defaultValue={"" || meeting[0].Passcode}
            />
          </div>
          <div className="form-group">
            <label>Old Business</label>
            <input
              className="form-control"
              placeholder="Old Business here..."
              defaultValue={"" || oldItems}
            />
            <small className="form-text text-muted">
              Please separate items with a comma
            </small>
          </div>
          <div className="form-group">
            <label>New Business</label>
            <input
              className="form-control"
              placeholder="New Business here..."
              defaultValue={"" || newItems}
            />{" "}
            <small className="form-text text-muted">
              Please separate items with a comma
            </small>
          </div>
          <div className="form-group">
            <label>Committee Reports</label>
            <input
              className="form-control"
              placeholder="Reports Here..."
              defaultValue={"" || reports}
            />
            <small className="form-text text-muted">
              Please separate items with a comma
            </small>
          </div>
          <div className="form-group">
            <label>Date</label>
            <br />
            <DatePicker
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeSelect
              selected={meeting[0].date}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <button
            // onClick={() => {}}
            // to="/steeringcommittee"
            // type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>{" "}
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
