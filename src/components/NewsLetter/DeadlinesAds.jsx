import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenToNewsletterFromFirestore } from "../../common/firestore/firestoreService";
import useFirestoreCollection from "../../common/firestore/useFirestoreCollection";
import { listenToNewsletter } from "./redux/NewsActions";

const DeadlinesAds = () => {
  const dispatch = useDispatch();

  const deadlinesads = useSelector((state) => state.newsletter.newsletter);
  // console.log(deadlinesads);

  useFirestoreCollection({
    query: () => listenToNewsletterFromFirestore(),
    data: (newsletter) => dispatch(listenToNewsletter(newsletter)),
    deps: [dispatch],
  });
  if (deadlinesads) {
    return (
      <div className="container elements">
        <div className="row">
          <div className="col col-md-6">
            <h1 className="text-center">Deadlines</h1>
            <pre>{deadlinesads[0].Deadlines}</pre>
            <br />
            Schedule for Article & Ad Graphic Submissions:
            <ul>
              <li>{deadlinesads[0].Submission[0]}</li>
              <li>{deadlinesads[0].Submission[1]}</li>
            </ul>
          </div>
          <div className="col col-md-6">
            <h1 className="text-center">Ads</h1>
            <p>{deadlinesads[0].Ads[0]}</p>
            <ul>
              <li>{deadlinesads[0].Ads[1]}</li>
              <li>{deadlinesads[0].Ads[2]}</li>
              <li>{deadlinesads[0].Ads[3]}y.</li>
            </ul>
            <h4>STEPS TO ADVERTISE</h4>
            <ul>
              <li>{deadlinesads[0].Steps[0]}</li>
              <li>{deadlinesads[0].Steps[1]}</li>
              <li>{deadlinesads[0].Steps[2]}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DeadlinesAds;
 