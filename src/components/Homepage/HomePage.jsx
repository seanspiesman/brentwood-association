import React, { useEffect } from "react";
import { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listenToHomepageFromFirestore,
  updateHomepageInFirestore,
} from "../../common/firestore/firestoreService";
import useFirestoreCollection from "../../common/firestore/useFirestoreCollection";
import ContactUsSidebar from "../SupportContact/ContactUsSidebar";
import { changeEdit, listenToHomepage } from "./redux/hpActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const homepage = useSelector((state) => state.homepage.homepage);
  const auth = useSelector((state) => state.auth);
  const input = createRef();

  useFirestoreCollection({
    query: () => listenToHomepageFromFirestore(),
    data: (detail) => dispatch(listenToHomepage(detail)),
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
    <>
      {homepage && (
        <div className="container">
          <br />
          <div className="row">
            <div
              className="col-lg-9 text-center elements"
              // style={{ width: "100%", height: "100%" }}
            >
              <img
                className="center-block"
                src="assets/bna_header.png"
                alt="Brentwood header"
                style={{
                  display: "inline-block",
                  maxHeight: "100%",
                  width: "100%",
                  overflow: "hidden",
                }}
              />
              <h3 className="text-center">
                {" "}
                Welcome to the official BNA Website
              </h3>
              <br />
              {!homepage[0].edit && (
                <>
                  <pre className="text-center">{homepage[0].description}</pre>
                  <p className="posted-by">POSTED BY DON LEIGHTON-BURWELL</p>
                  {admin && (
                    <button
                      className="btn btn-success float-right"
                      onClick={() => dispatch(changeEdit(homepage[0].id))}
                    >
                      Edit
                    </button>
                  )}
                </>
              )}
              {homepage[0].edit && (
                <>
                  <textarea
                    style={{ width: "100%", height: "500px" }}
                    ref={input}
                    defaultValue={homepage[0].description}
                  />
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        let homepageDetails = homepage[0];
                        homepage[0].description = input.current.value;
                        updateHomepageInFirestore(homepageDetails);
                        dispatch(changeEdit(homepage[0].id));
                      }}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(changeEdit(homepage[0].id))}
                    >
                      Go back
                    </button>
                  </div>
                </>
              )}
            </div>

            <ContactUsSidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
