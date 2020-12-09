import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listenToMeetingsFromFirestore } from "../../common/firestore/firestoreService";
import useFirestoreCollection from "../../common/firestore/useFirestoreCollection";
import ContactUsSidebar from "../SupportContact/ContactUsSidebar";
import { listenToSteering } from "./redux/SteeringActions";

const SteeringCommittee = () => {
  const dispatch = useDispatch();
  const meetings = useSelector((state) => state.steering.steering);
  const auth = useSelector((state) => state.auth);

  if (meetings) meetings.reverse();

  useFirestoreCollection({
    query: () => listenToMeetingsFromFirestore(),
    data: (meets) => dispatch(listenToSteering(meets)),
    deps: [dispatch],
  });

  let admin = false;
  if (auth.currentUser && auth.currentUser.email) {
    if (
      auth.currentUser.email === "mcabarney@gmail.com" ||
      auth.currentUser.email === "sean.spies@gmail.com" ||
      auth.currentUser.email === "brentwood.austin@gmail.com"
    ) {
      admin = true;
    }
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-lg-9">
          <div className="elements" style={{ marginBottom: "20px" }}>
            <h2 className="text-center">{"Steering Committee (Monthly)"}</h2>
            <br />
            <p className="">
              If you are a member of the Brentwood Neighborhood Association, you
              are always welcome to attend the Steering Committee's regular
              monthly meetings. The meetings are typically held on the{" "}
              <b>first Wednesday of each month</b> at 7:00 p.m. at the North
              Austin Lions Club at 1103 Justin Lane. If you have an issue that
              you want added to the agenda, please contact us at{" "}
              <a href="mailto:brentwood.austin@gmail.com">
                brentwood.austin@gmail.com
              </a>
              .
              <br />
              <b>
                Note: during the pandemic, we will hold all of our meetings on
                Zoom.
              </b>
              <br />
              <br />
              Our annual General Membership meeting is held in February at which
              time we elect new Officers and SC Members and review our
              achievements over the past year.
              <br />
              <br />
              In order to improve transparency and give residents access to
              information, we are posting minutes from the monthly Steering
              Committee Meetings on this page. Once the minutes for our meetings
              have been approved (typically one month after the event), we will
              post link to a PDF minutes here.
            </p>
            <div className="text-center">
              {admin && (
                <Link to="/newmeeting" className="btn btn-primary">
                  Create New Meeting
                </Link>
              )}
            </div>
          </div>
          {meetings &&
            meetings[0] &&
            meetings.map((meeting, index) => {
              return (
                <div
                  key={index}
                  className="elements"
                  style={{
                    marginTop: "5px",
                    paddingTop: "10px",
                    paddingBottom: "50px",
                  }}
                >
                  <div>
                    <h3>{meeting.title}</h3>
                    <p>{format(meeting.date, "PPPpp")}</p>
                    <h6>
                      Zoom Meeting ID: {meeting.ZoomID}
                      <br />
                      Passcode: {meeting.Passcode}
                    </h6>
                    <ol>
                      <li>Welcome</li>
                      <li>
                        Old Business
                        <ul>
                          {meeting.Old.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        New Business
                        <ul>
                          {meeting.New.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        Committee Reports
                        <ul>
                          {meeting.Reports.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </li>
                      <li>Adjournment</li>
                    </ol>
                    {admin && (
                      <Link
                        className="btn btn-success float-right"
                        to={`/meeting/${meeting.id}`}
                      >
                        Edit
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        <ContactUsSidebar />
      </div>
    </div>
  );
};

export default SteeringCommittee;
